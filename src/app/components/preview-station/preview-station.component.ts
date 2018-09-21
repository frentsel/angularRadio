import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'preview-station',
  templateUrl: './preview-station.component.html',
  styleUrls: ['./preview-station.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewStationComponent {

  @Input() item: {
    id: string | number;
    title: string;
    img: string;
    genre: string;
    city?: string;
    country?: string;
    genreRu?: string;
    radio?: string;
    radioLink?: string;
    text?: string;
    type?: string;
  };

}
