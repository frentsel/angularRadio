import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StationComponent } from './station.component';
import { CommentsModule } from '../components/comments/comments.module';

const routes: Routes = [{
  path: '**',
  component: StationComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommentsModule
  ],
  declarations: [
    StationComponent
  ],
  exports: [
    StationComponent
  ]
})
export class StationModule { }
