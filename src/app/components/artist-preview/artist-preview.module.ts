import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  providers: [],
})
export class ArtistPreviewModule { }
