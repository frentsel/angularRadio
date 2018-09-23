import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities.component';

const routes: Routes = [{
  path: '**',
  component: CitiesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CitiesComponent]
})
export class CitiesModule { }
