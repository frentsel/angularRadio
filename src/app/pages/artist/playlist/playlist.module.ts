import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import { CommentsModule } from '../../../components/comments/comments.module';
import { TracksModule } from '../../../components/tracks/tracks.module';

const routes: Routes = [{
  path: '**',
  component: PlaylistComponent
}];

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    TracksModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlaylistComponent
  ],
  providers: []
})
export class PlaylistModule { }
