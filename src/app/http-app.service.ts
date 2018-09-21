import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class HttpAppService {

  promise;

  constructor(private http: Http) { }

  toggleLoader(state) {
    const method: string = state ? 'add' : 'remove';
    document.getElementById('loader').classList[method]('active');
  }

  getLabelsByType(key) {

    return this.http.get('https://frentsel.github.io/angularRadio/assets/stations.json')
      .pipe(
        map((res) => res.json()),
        map((items) => {

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

    const search = new URLSearchParams();
    const toggleLoader = this.toggleLoader.bind(null, false);

    if (params) {
      Object.keys(params).map(key => {
        search.set(key, params[key]);
      });
    }

    this.toggleLoader(true);

    this.promise = this.http.get(url, { search })
      .pipe(map(res => res.json()))
      .toPromise();

    this.promise
      .then(toggleLoader)
      .catch(toggleLoader);

    return this.promise;
  }
}
