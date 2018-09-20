import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {

  albums: any[];
  artist: string;

  constructor(private route: ActivatedRoute,
    private httpAppService: HttpAppService) {
  }

  filterAlbums() {
    this.albums = this.albums.filter(album => {
      return album.name !== '(null)' && album.image[2]['#text'];
    });
  }

  loadAlbums() {

    this.route.parent.params.subscribe((...args) => {

      this.artist = window.location.pathname.split('/').slice(2, 3)[0];
      const params = {
        'method': 'artist.gettopalbums',
        'artist': this.artist,
        'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
        'limit': 50,
        'format': 'json',
      };

      this.httpAppService.getJSON(`http://ws.audioscrobbler.com/2.0/`, params)
        .then(data => {
          this.albums = data['topalbums']['album'];
          this.filterAlbums();
        });
    });
  }

  ngOnInit() {
    this.loadAlbums();
  }
}
