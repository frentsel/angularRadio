import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Output, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';

@Component({
  styleUrls: ['./station.component.scss'],
  templateUrl: './station.component.html',
})

export class StationComponent implements OnInit {

  id = null;
  station: any = {};
  timerId;

  @Output() artistName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private stationService: StationService
  ) { }

  ngOnDestroy() {
    clearTimeout(this.timerId);
    this.loadMeta = () => { };
  }

  loadMeta() {

    this.http.get(`http://localhost:80/meta.php?id=${this.id}`)
      .subscribe(data => {
        this.artistName = data['track'].split(' -').shift();
      });

    this.timerId = setTimeout(this.loadMeta.bind(this), 5000);
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {

      this.http.get('https://frentsel.github.io/angularRadio/assets/stations.json')
        .subscribe(data => {
          this.station = data[this.id];
          this.stationService.emitChange(data[this.id].radio);
          this.loadMeta();
        });

      this.id = params['id'];
    });
  }
}
