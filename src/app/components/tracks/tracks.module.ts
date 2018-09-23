import { NgModule } from '@angular/core';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { TracksComponent } from './tracks.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxY2PlayerModule
  ],
  declarations: [
    TracksComponent
  ],
  exports: [
    TracksComponent
  ],
  providers: []
})

export class TracksModule { }
