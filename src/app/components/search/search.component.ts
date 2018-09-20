import { Component } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  search: string;
  focus: string;
  url: string = `https://ws.audioscrobbler.com/2.0/`;
  artists: Array<any>;

  constructor(private httpAppService: HttpAppService) {
  }

  focusOutHandler() {
    setTimeout(() => this.focus = '', 500);
  }

  async valueChange(artist) {

    const params = {
      artist,
      method: 'artist.search',
      api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
      lang: 'ru',
      format: 'json',
    };

    const artists = await this.httpAppService.getJSON(this.url, params)
    this.artists = artists['results']['artistmatches']['artist'];
  }
}
