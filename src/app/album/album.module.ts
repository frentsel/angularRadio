import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album.component';
import { CommentsModule } from '../comments/comments.module';
import { TracksModule } from '../components/tracks/tracks.module';

const routes: Routes = [{
  path: '**',
  component: AlbumComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommentsModule,
    TracksModule
  ],
  declarations: [
    AlbumComponent
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }
