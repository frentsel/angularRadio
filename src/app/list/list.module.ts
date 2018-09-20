import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpAppService } from '../http-app.service';
import { ListComponent } from './list.component';
import { PreviewStationModule } from '../components/preview-station/preview-station.module';

const routes: Routes = [{
  path: '**',
  component: ListComponent
}];

@NgModule({
  imports: [
    CommonModule,
    PreviewStationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  providers: [
    HttpAppService
  ]
})
export class ListModule { }
