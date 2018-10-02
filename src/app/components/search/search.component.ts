import { Component } from '@angular/core';
import { LastFmService } from '../../services/lastfm.service';
import { Observable, from, interval, zip, of, Subject, fromEvent } from 'rxjs';
import { sample, delay, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
})

export class SearchComponent {

  search: string = '';
  focus: string = null;
  onSearch = new Subject<any>();
  artists$: Observable<any[]>;

  constructor(private api: LastFmService) {

    this.onSearch
      .pipe(
        map((event) => event.target.value),
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe((artist) => {
        this.artists$ = this.api.searchArtist({ artist });
      });
  }

  blurHandler(): void {
    setTimeout(() => this.focus = null, 100);
  }
}
