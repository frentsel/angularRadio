import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss']
})

export class TopAlbumsComponent implements OnInit, OnChanges {

  @Input() artist: string;
  albums: any[];

  constructor(private httpAppService: HttpAppService) {
  }

  filterAlbums() {
    this.albums = this.albums.filter(album => {
      return album.name !== '(null)' && album.image[2]['#text'];
    }).slice(0, 5);
  }

  loadAlbums() {

    const params = {
      'method': 'artist.gettopalbums',
      'artist': this.artist,
      'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
      'lang': 'ru',
      'limit': 30,
      'format': 'json'
    };

    this.httpAppService.getJSON(`https://ws.audioscrobbler.com/2.0/`, params)
      .then(data => {
        this.albums = data['topalbums']['album'];
        this.filterAlbums();
      });
  }

  ngOnInit() {
    this.loadAlbums();
  }

  ngOnChanges(): void {
    this.loadAlbums();
  }
}
