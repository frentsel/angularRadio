import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpAppService } from '../../http-app.service';
import { CommentsModule } from '../../components/comments/comments.module';
import { TracksModule } from '../../components/tracks/tracks.module';

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
  providers: [
    HttpAppService
  ]
})
export class PlaylistModule { }
