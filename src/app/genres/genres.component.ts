import {Component} from '@angular/core';
import {HttpAppService} from '../http-app.service';

@Component({
    moduleId: module.id,
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css']
})
export class GenresComponent {

    genres: any[] = [];

    constructor(http: HttpAppService) {
        http.getJSON('https://frentsel.github.io/angularRadio/assets/stations.json')
            .then(this.preparingData.bind(this));
    }

    private preparingData(items) {

        this.genres = items.reduce((res, station) => {

            if (!res[station.genre]) {
                res[station.genre] = 0;
            }

            res[station.genre] += 1;
            return res;
        }, {});

        this.genres = Object.keys(this.genres).map(genre => {
            return {
                genre,
                count: this.genres[genre]
            };
        });
    }
}
