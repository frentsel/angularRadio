import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  private _config = {
    api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
    lang: 'ru',
    format: 'json',
  }

  constructor(private http: HttpClient) { }

  private _fetch(_params): Observable<any> {

    const params = Object.assign({}, _params, this._config);
    const search:any = {};

    Object.keys(params).map(key => {
      search[key] = decodeURI(params[key]);
    });

    return this.http.get(`https://ws.audioscrobbler.com/2.0/`, { params: search });
  }

  getAlbum(_params): Observable<any> {

    const params = Object.assign({ method: 'album.getinfo' }, _params);

    return this._fetch(params)
      .pipe(
        map((data: any) => data['album']),
        map((album: any) => {
          album.content = '';
          if (album.wiki && album.wiki.content) {
            album.content = album.wiki.content.replace(/\n+/gm, `<br><br>`);
          }
          return album;
        })
      );
  }

  getAlbums(_params): Observable<any> {

    const params = Object.assign({ method: 'artist.gettopalbums' }, _params);

    return this._fetch(params)
      .pipe(
        map((data: any) => data['topalbums']['album']),
        map((albums: any) => {
          return albums.filter((album: any) => {
            return album.name !== '(null)' && album['image']['2']['#text']
          });
        })
      );
  }

  getBio(_params): Observable<any> {

    const params = Object.assign({ method: 'artist.getinfo' }, _params);

    return this._fetch(params)
      .pipe(
        map((data: any) => data.artist),
        map((artist: any) => {
          [artist.content] = artist.bio.content.split('<a href="https://www.last.fm/music/');
          artist.content = artist.content.trim().replace(/\n+/gm, `<br><br>`);
          return artist;
        })
      );
  }

  getTracks(_params): Observable<any> {

    const params = Object.assign({
      method: 'artist.getTopTracks',
      autocorrect: 1,
      page: 1,
      limit: 50
    }, _params);

    return this._fetch(params)
      .pipe(map((data: any) => data.toptracks.track));
  }
}
