import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  styleUrls: ['./artist.component.scss'],
  templateUrl: './artist.component.html',
})

export class ArtistComponent {

  public artist: string = null;

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(() => {
      const artist = window.location.pathname.split('/').slice(-2)[0];
      this.artist = decodeURI(artist);
    });
  }
}
