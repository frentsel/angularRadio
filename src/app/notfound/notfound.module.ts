import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './notfound.component';
import { CommentsModule } from '../comments/comments.module';

const routes: Routes = [{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommentsModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
