import { NgModule } from '@angular/core';
import { HttpAppService } from '../../http-app.service';
import { CommonModule } from '@angular/common';
import { TopAlbumsComponent } from './top-albums.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopAlbumsComponent
  ],
  exports: [
    TopAlbumsComponent
  ],
  providers: [
    HttpAppService
  ],
})

export class TopAlbumsModule { }
