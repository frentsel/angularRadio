import {Component} from '@angular/core';
import {HttpAppService} from '../http-app.service';

@Component({
    moduleId: module.id,
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

    countries = [];

    constructor(private http: HttpAppService) {
        http.getJSON('https://frentsel.github.io/angularRadio/assets/stations.json')
            .then(this.preparingData.bind(this));
    }

    private preparingData(items) {

        this.countries = items.reduce((res, station) => {

            if (!res[station.country]) {
                res[station.country] = 0;
            }

            res[station.country] += 1;
            return res;
        }, {});

        this.countries = Object.keys(this.countries).map(country => {
            return {
                country,
                count: this.countries[country]
            };
        });
    }
}
