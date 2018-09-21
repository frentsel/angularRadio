import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../lastfm.service';

@Component({
  styleUrls: ['./bio.component.scss'],
  templateUrl: './bio.component.html',
})

export class BioComponent implements OnInit {

  artistName: string;
  artist: any;

  constructor(
    private route: ActivatedRoute,
    private api: LastFmService
  ) { }

  scrollToTop() {
    document.getElementsByClassName('content')[0].scroll(0, 0);
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.artistName = window.location.pathname.split('/').slice(-2)[0];
      this.getData();
    });
  }

  getData() {

    const params = { artist: this.artistName };

    this.api.getBio(params).subscribe((artist) => {
      this.artist = artist;
      this.scrollToTop();
    });
  }
}
