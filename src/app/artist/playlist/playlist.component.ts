import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  tracks: any[];
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpAppService: HttpAppService,
  ) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(() => {

      const _params = {
        'method': 'artist.getTopTracks',
        'autocorrect': 1,
        'artist': window.location.pathname.split('/').slice(-2)[0],
        'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
        'page': 1,
        'limit': 50,
        'format': 'json',
      };

      this.httpAppService.getJSON(`https://ws.audioscrobbler.com/2.0/`, _params)
        .then(data => {
          this.tracks = data.toptracks.track;
          this.title = 'Top 50 tracks';
        });
    });
  }
}
