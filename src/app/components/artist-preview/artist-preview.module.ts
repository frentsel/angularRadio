import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAppService } from '../../http-app.service';
import { ArtistPreviewComponent } from './artist-preview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
