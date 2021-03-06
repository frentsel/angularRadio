import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { CommentsModule } from '../../../components/comments/comments.module';

const routes: Routes = [{
  path: '**',
  component: AlbumsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AlbumsComponent
  ],
  providers: [],
})
export class AlbumsModule { }
