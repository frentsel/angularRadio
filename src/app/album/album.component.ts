import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../lastfm.service';

@Component({
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {

  title: string = 'Tracks';
  album: { [key: string]: any; };

  constructor(
    private route: ActivatedRoute,
    private api: LastFmService
  ) { }

  scrollToTop() {
    document.getElementsByClassName('content')[0].scroll(0, 0);
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      const _params = {
        artist: window.location.pathname.split('/').slice(2, 3)[0],
        album: params['album'],
      };

      this.api.getAlbum(_params).subscribe((album) => {
        this.album = album;
        this.scrollToTop();
      });
    });
  }
}
