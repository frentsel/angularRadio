import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

  url = `https://ws.audioscrobbler.com/2.0/`;
  artistName: string;
  artist: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpAppService
  ) { }

  scrollToTop() {
    document.getElementsByClassName('content')[0].scroll(0, 0);
  }

  makeCorrectContent() {

    this.artist.content = '';

    if (this.artist['bio'] && this.artist['bio']['content']) {
      this.artist.content = this.artist['bio']['content'];
      [this.artist.content] = this.artist.content.split('<a href="https://www.last.fm/music/');
      this.artist.content = this.artist.content.trim().replace(/\n+/gm, `<br><br>`);
    }
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.artistName = window.location.pathname.split('/').slice(-2)[0];
      this.getData();
    });
  }

  async getData() {

    const params = {
      method: 'artist.getinfo',
      artist: this.artistName,
      api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
      lang: 'ru',
      format: 'json',
    };
    const { artist } = await this.http.getJSON(this.url, params);

    this.artist = artist;
    this.makeCorrectContent();
    this.scrollToTop();
  }
}
