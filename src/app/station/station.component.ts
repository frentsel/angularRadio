import { ActivatedRoute, Params } from '@angular/router';
import { Component, Output, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StationService } from './station.service';

@Component({
    moduleId: module.id,
    templateUrl: './station.component.html',
    styleUrls: ['./station.component.scss']
})

export class StationComponent implements OnInit {

    id = null;
    station = {};
    timerId;

    @Output() artistName: string;

    constructor(private activatedRoute: ActivatedRoute, private http: Http, private stationService: StationService) {
    }

    ngOnDestroy() {
        clearTimeout(this.timerId);
        this.loadMeta = () => {};
    }

    loadMeta() {

        this.http.get(`http://localhost:80/meta.php?id=${this.id}`)
            .map(res => res.json())
            .subscribe(data => {
                this.artistName = data['track'].split(' -').shift();
            });

        this.timerId = setTimeout(this.loadMeta.bind(this), 5000);
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.http.get('../assets/stations.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.station = data[this.id];
                    this.stationService.emitChange(data[this.id].radio);
                    this.loadMeta();
                });

            this.id = params['id'];
        });
    }
}
