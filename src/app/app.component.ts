import { Component } from '@angular/core';
import { StationService } from './services/station.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public src: string = '';

  constructor(private stationService: StationService) {
    this.stationService.changeEmitted$
      .subscribe((text) => {
        this.src = text;
      });
  }
}
