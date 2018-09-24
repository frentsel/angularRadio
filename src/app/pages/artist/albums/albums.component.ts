import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../../services/lastfm.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {

  albums$: Observable<any[]>;
  artist: string;

  constructor(
    private route: ActivatedRoute,
    private api: LastFmService) {
  }

  loadAlbums() {

    this.route.parent.params.subscribe(() => {

      this.artist = window.location.pathname.split('/').slice(-2)[0];
      const params = {
        artist: this.artist,
        limit: 50,
      };

      this.albums$ = this.api.getAlbums(params);
    });
  }

  ngOnInit() {
    this.loadAlbums();
  }
}
