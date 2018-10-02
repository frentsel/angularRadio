import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../../services/lastfm.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './playlist.component.html'
})

export class PlaylistComponent implements OnInit {

  tracks: Observable<any>;
  title: string = 'Top 50 tracks';

  constructor(
    private route: ActivatedRoute,
    private api: LastFmService,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(({ artist }) => {
      this.tracks = this.api.getTracks({ artist });
    });
  }
}
