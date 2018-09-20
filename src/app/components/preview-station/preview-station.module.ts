import { NgModule } from '@angular/core';
import { PreviewStationComponent } from './preview-station.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PreviewStationComponent
  ],
  exports: [
    PreviewStationComponent
  ]
})
export class PreviewStationModule { }
