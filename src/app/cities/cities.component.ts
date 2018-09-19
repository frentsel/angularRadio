import {Component} from '@angular/core';
import {HttpAppService} from '../http-app.service';


@Component({
    moduleId: module.id,
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

    cities = [];

    constructor(http: HttpAppService) {
        http.getJSON('https://frentsel.github.io/angularRadio/assets/stations.json')
            .then(this.preparingData.bind(this));
    }

    preparingData(items) {

        this.cities = items.reduce((res, station) => {

            if (!res[station.city]) {
                res[station.city] = 0;
            }

            res[station.city] += 1;
            return res;
        }, {});

        this.cities = Object.keys(this.cities).map(city => {
            return {
                city,
                count: this.cities[city]
            };
        });
    }
}
