import { NgModule } from '@angular/core';
import { SimilarComponent } from './similar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SimilarComponent
  ],
  exports: [
    SimilarComponent
  ]
})
export class SimilarModule { }
