import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries.component';

const routes: Routes = [
  {
    path: '**',
    component: CountriesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountriesComponent]
})
export class CountriesModule { }
