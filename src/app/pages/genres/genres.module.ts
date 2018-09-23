import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres.component';

const routes: Routes = [{
  path: '**',
  component: GenresComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenresComponent]
})
export class GenresModule { }
