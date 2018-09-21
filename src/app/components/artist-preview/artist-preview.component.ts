import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
  selector: 'app-artist-preview',
  templateUrl: 'artist-preview.component.html',
  styleUrls: ['artist-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArtistPreviewComponent implements OnInit {

  @Input() artistName: string;
  artist;

  constructor(private httpAppService: HttpAppService) {
  }

  makeCorrectContent() {
    this.artist.content = '';
    if (this.artist['bio'] && this.artist['bio']['summary']) {
      this.artist.content = this.artist['bio']['summary'];
      this.artist.content = this.artist.content.trim().replace(/\n+/gm, `<br><br>`);
    }
  }

  ngOnChanges() {
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {

    const params = {
      'method': 'artist.getinfo',
      'artist': this.artistName,
      'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
      'lang': 'ru',
      'format': 'json'
    };

    this.httpAppService.getJSON(`https://ws.audioscrobbler.com/2.0/`, params)
      .then(data => {
        this.artist = data['artist'];
        this.makeCorrectContent();
      });
  }
}
