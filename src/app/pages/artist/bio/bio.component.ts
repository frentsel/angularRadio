import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastFmService } from '../../../services/lastfm.service';
import { Observable } from 'rxjs';

@Component({
  styleUrls: ['./bio.component.scss'],
  templateUrl: './bio.component.html',
})

export class BioComponent implements OnInit {

  artistName: string;
  artist$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private api: LastFmService
  ) { }

  scrollToTop(): void {
    document.getElementsByClassName('content')[0].scroll(0, 0);
  }

  ngOnInit(): void {
    this.route.parent.params.subscribe(({ artist }) => {
      this.artistName = artist;
      this.getData();
    });
  }

  async getData(): Promise<any> {

    const params = { artist: this.artistName };

    this.artist$ = await this.api.getBio(params);
    this.scrollToTop();
  }
}
