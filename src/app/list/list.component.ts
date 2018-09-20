import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { HttpAppService } from '../http-app.service';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {

  items = [];
  title = 'Top 50 Stations';

  constructor(private route: ActivatedRoute, private http: HttpAppService) {
    route.params.subscribe(this.getData.bind(this));
  }

  private getData(params: Params) {
    this.http.getJSON(`https://frentsel.github.io/angularRadio/assets/stations.json`)
      .then(data => {
        this.items = this.filterDataByParams(params, data);
      });
  }

  private filterDataByParams(params, rows) {

    if (!params.id) {
      return rows.slice(0, 52);
    }

    if (params.entity && params.id) {
      rows = rows.filter(item =>
        item[params.entity] === params.id
      );
      this.title = `${params.entity} - ${params.id} (${rows.length})`;
      return rows;
    }

    return rows;
  }
}
