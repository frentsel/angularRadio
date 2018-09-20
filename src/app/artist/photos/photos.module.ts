import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { HttpAppService } from '../../http-app.service';
import { LightboxModule } from 'angular2-lightbox';
import { RouterModule, Routes } from '@angular/router';
import { CommentsModule } from '../../components/comments/comments.module';

const routes: Routes = [{
  path: '**',
  component: PhotosComponent
}];

@NgModule({
  imports: [
    CommonModule,
    LightboxModule,
    RouterModule.forChild(routes),
    CommentsModule
  ],
  declarations: [
    PhotosComponent
  ],
  exports: [
    PhotosComponent
  ],
  providers: [
    HttpAppService
  ]
})
export class PhotosModule { }
