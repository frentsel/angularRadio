import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpAppService } from '../../services/http-app.service';
import { Lightbox } from 'angular2-lightbox';

@Component({
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];
  artist: string;
  uri: string = `http://localhost:80/lastfm.php`;

  constructor(
    private lightbox: Lightbox,
    private route: ActivatedRoute,
    private http: HttpAppService
  ) { }

  async loadData({ artist }) {

    this.artist = artist;

    const params = {
      artist: this.artist,
      method: 'getArtistImages',
    };

    const photos = await this.http.getJSON(this.uri, params);
    this.buildListPhoto(photos);
  };

  open(index: number): void {
    this.lightbox.open(this.photos, index);
  }

  buildListPhoto(photos) {
    this.photos = photos.map(img => {
      return {
        src: img.replace('avatar170s', '770x0'),
        caption: this.artist,
        thumb: img
      }
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(this.loadData.bind(this));
  }
}
