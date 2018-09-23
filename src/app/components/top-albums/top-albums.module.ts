import { NgModule } from '@angular/core';
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
  providers: [],
})

export class TopAlbumsModule { }
