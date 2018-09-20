import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAppService } from '../../http-app.service';
import { ArtistPreviewComponent } from './artist-preview.component';
import { RouterModule } from '@angular/router';
import { TopAlbumsModule } from '../top-albums/top-albums.module';
import { SimilarModule } from '../similar/similar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TopAlbumsModule,
    SimilarModule
  ],
  declarations: [
      ArtistPreviewComponent
  ],
  exports: [
      ArtistPreviewComponent
  ],
  providers: [
    HttpAppService
  ],
})
export class ArtistPreviewModule { }
