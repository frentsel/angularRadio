import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/pages/list/list.module#ListModule' },
  { path: 'list/:entity/:id', loadChildren: 'app/pages/list/list.module#ListModule' },
  { path: 'countries', loadChildren: 'app/pages/countries/countries.module#CountriesModule' },
  { path: 'cities', loadChildren: 'app/pages/cities/cities.module#CitiesModule' },
  { path: 'genres', loadChildren: 'app/pages/genres/genres.module#GenresModule' },
  { path: 'station/:id', loadChildren: 'app/pages/station/station.module#StationModule' },
  { path: 'artist', loadChildren: 'app/pages/artist/artist.module#ArtistModule' },
  { path: '**', loadChildren: 'app/pages/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
