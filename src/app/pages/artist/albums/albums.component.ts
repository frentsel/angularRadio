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

    this.route.parent.params.subscribe(({ artist }) => {

      this.artist = artist;
      const params = {
        artist,
        limit: 50
      };

      this.albums$ = this.api.getAlbums(params);
    });
  }

  ngOnInit() {
    this.loadAlbums();
  }
}
