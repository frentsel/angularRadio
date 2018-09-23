import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LastFmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-artist-preview',
  styleUrls: ['artist-preview.component.scss'],
  templateUrl: 'artist-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArtistPreviewComponent implements OnInit {

  @Input() artistName: string;
  artist$;

  constructor(private api: LastFmService) { }

  ngOnChanges() {
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params = { artist: this.artistName };
    this.artist$ = this.api.getBio(params);
  }
}
