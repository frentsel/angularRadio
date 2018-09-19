import {Component, OnInit} from '@angular/core';
import {StationService} from './station/station.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    src = '';

    constructor (private stationService: StationService) {
        this.stationService.changeEmitted$.subscribe(
            text => {
                this.src = text;
            });
    }

    ngOnInit () {
    }
}
