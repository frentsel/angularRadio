import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpAppService {

  promise;

  constructor(private http: Http) {
  }

  toggleLoader(state) {
    const method: string = state ? 'add' : 'remove';
    document.getElementById('loader').classList[method]('active');
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
      .map(res => res.json())
      .toPromise();

    this.promise
      .then(toggleLoader)
      .catch(toggleLoader);

    return this.promise;
  }
}
