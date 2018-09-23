import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LastFmService } from '../../services/lastfm.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-albums',
  styleUrls: ['./top-albums.component.scss'],
  templateUrl: './top-albums.component.html',
})

export class TopAlbumsComponent implements OnInit, OnChanges {

  @Input() artist: string;
  public albums$: Observable<any[]>;

  constructor(private api: LastFmService) { }

  loadAlbums(): void {
    const params = { artist: this.artist };
    this.albums$ = this.api.getAlbums(params)
      .pipe(
        map((albums) => albums.slice(0, 5))
      );
  }

  ngOnInit(): void {
    this.loadAlbums();
  }

  ngOnChanges(): void {
    this.loadAlbums();
  }
}
