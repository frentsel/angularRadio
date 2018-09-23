import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpAppService {

  promise;

  constructor(private http: HttpClient) { }

  toggleLoader(state) {
    const method: string = state ? 'add' : 'remove';
    document.getElementById('loader').classList[method]('active');
  }

  getLabelsByType(key) {

    return this.http.get('https://frentsel.github.io/angularRadio/assets/stations.json')
      .pipe(
        map((items: any[]) => {

        const data = items.reduce((res, item) => {

          if (!res[item[key]]) {
            res[item[key]] = 0;
          }

          res[item[key]] += 1;
          return res;
        }, {});

        return Object.keys(data).map((type) => {
          return {
            type,
            count: data[type]
          }
        });
      }));
  }

  getJSON(url, params = {}) {

    const search:any = {};
    const toggleLoader = this.toggleLoader.bind(null, false);

    if (params) {
      Object.keys(params).map(key => {
        search[key]= params[key];
      });
    }

    this.toggleLoader(true);

    this.promise = this.http.get(url, { params: search })
      .toPromise();

    this.promise
      .then(toggleLoader)
      .catch(toggleLoader);

    return this.promise;
  }
}
