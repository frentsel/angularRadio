import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimilarComponent {
  @Input() similar: any[];
}
