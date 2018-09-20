import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/list/list.module#ListModule' },
  { path: 'list/:entity/:id', loadChildren: 'app/list/list.module#ListModule' },
  { path: 'countries', loadChildren: 'app/countries/countries.module#CountriesModule' },
  { path: 'cities', loadChildren: 'app/cities/cities.module#CitiesModule' },
  { path: 'genres', loadChildren: 'app/genres/genres.module#GenresModule' },
  { path: 'station/:id', loadChildren: 'app/station/station.module#StationModule' },
  {
    path: 'artist', loadChildren: 'app/artist/artist.module#ArtistModule'
  },
  { path: '**', loadChildren: 'app/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
