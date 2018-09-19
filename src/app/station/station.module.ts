import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StationComponent } from './station.component';
// import { ArtistPreviewComponent } from '../artist/artist-preview/artist-preview.component';
import { CommentsModule } from '../comments/comments.module';

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
