import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LastFmService {

  private _config = {
    api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
    lang: 'ru',
    format: 'json',
  }

  constructor(private http: Http) { }

  fetch(_params): Observable<any> {

    const params = Object.assign({}, _params, this._config);
    const search = new URLSearchParams();

    Object.keys(params).map(key => {
      search.set(key, params[key]);
    });

    return this.http.get(`https://ws.audioscrobbler.com/2.0/`, { search })
      .map((res: Response) => res.json());
  }

  getAlbum(_params): Observable<any> {

    const params = Object.assign({ method: 'album.getinfo' }, _params);

    return this.fetch(params)
      .map((data: any) => data['album'])
      .map((album: any) => {
        album.content = '';
        if (album.wiki && album.wiki.content) {
          album.content = album.wiki.content.replace(/\n+/gm, `<br><br>`);
        }
        return album;
      });
  }

  getAlbums(_params): Observable<any> {

    const params = Object.assign({ method: 'artist.gettopalbums' }, _params);

    return this.fetch(params)
      .map((data: any) => data['topalbums']['album'])
      .map((albums: any) => {
        return albums.filter((album: any) => {
          return album.name !== '(null)' && album['image']['2']['#text']
        });
      });
  }
}
