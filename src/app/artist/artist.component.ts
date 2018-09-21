import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.scss']
})

export class ArtistComponent implements OnInit {

  artist: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.artist = params['artist'];
    });
  }
}