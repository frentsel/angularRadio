import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ArtistComponent } from './artist/artist.component';
import { BioComponent } from './artist/bio/bio.component';
import { PlaylistComponent } from './artist/playlist/playlist.component';
import { PhotosComponent } from './artist/photos/photos.component';
import { AlbumsComponent } from './artist/albums/albums.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListComponent },
  { path: 'list/:entity/:id', component: ListComponent },
  { path: 'countries', loadChildren: 'app/countries/countries.module#CountriesModule' },
  { path: 'cities', loadChildren: 'app/cities/cities.module#CitiesModule' },
  { path: 'genres', loadChildren: 'app/genres/genres.module#GenresModule' },
  { path: 'station/:id', loadChildren: 'app/station/station.module#StationModule' },
  {
    path: 'artist/:artist', component: ArtistComponent,
    children: [
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
      { path: 'bio', component: BioComponent },
      { path: 'playlist', component: PlaylistComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'album/:album', loadChildren: 'app/album/album.module#AlbumModule' },
      { path: 'video', component: PlaylistComponent },
      { path: 'photos', component: PhotosComponent },
    ]
  },
  { path: '**', loadChildren: 'app/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
