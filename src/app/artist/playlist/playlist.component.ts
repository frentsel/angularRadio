import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/lastfm.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './playlist.component.html'
})

export class PlaylistComponent implements OnInit {

  tracks: Observable<any>;
  title: string = 'Top 50 tracks';

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: LastFmService,
  ) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(() => {

      const artist = window.location.pathname.split('/').slice(-2)[0];

      this.tracks = this.api.getTracks({ artist });
    });
  }
}
