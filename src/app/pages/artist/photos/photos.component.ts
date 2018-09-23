import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../../../services/http-app.service';
import { Lightbox } from 'angular2-lightbox';

@Component({
  styleUrls: ['./photos.component.scss'],
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];
  artist: string;
  uri: string = `http://localhost:80/dashboard/lastfm.php`;

  constructor(
    private lightbox: Lightbox,
    private route: ActivatedRoute,
    private http: HttpAppService
  ) { }

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
    this.route.parent.params.subscribe(() => {
      this.artist = window.location.pathname.split('/').slice(-2)[0];
      
      const params = {
        artist: this.artist,
        method: 'getArtistImages',
      };
  
      this.http.getJSON(this.uri, params).then((photos) => {
        this.buildListPhoto(photos);
      });
    });
  }
}
