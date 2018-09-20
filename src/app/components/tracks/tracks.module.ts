import { NgModule } from '@angular/core';
import { HttpAppService } from '../../http-app.service';
import { StationService } from '../../station/station.service';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { TracksComponent } from './tracks.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxY2PlayerModule.forRoot()
  ],
  declarations: [
    TracksComponent
  ],
  exports: [
    TracksComponent
  ],
  providers: [
    HttpAppService,
    StationService
  ]
})

export class TracksModule { }
