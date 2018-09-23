import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StationComponent } from './station.component';
import { CommentsModule } from '../../components/comments/comments.module';
import { ArtistPreviewModule } from '../../components/artist-preview/artist-preview.module';

const routes: Routes = [{
  path: '**',
  component: StationComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommentsModule,
    ArtistPreviewModule
  ],
  declarations: [
    StationComponent
  ],
  exports: [
    StationComponent
  ]
})
export class StationModule { }
