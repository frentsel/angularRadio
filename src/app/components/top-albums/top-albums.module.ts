import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopAlbumsComponent } from './top-albums.component';

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
