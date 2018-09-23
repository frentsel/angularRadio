import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { TracksComponent } from './tracks.component';

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
