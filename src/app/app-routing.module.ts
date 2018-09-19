import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ArtistComponent } from './artist/artist.component';
import { BioComponent } from './artist/bio/bio.component';
import { PlaylistComponent } from './artist/playlist/playlist.component';
import { PhotosComponent } from './artist/photos/photos.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './artist/albums/albums.component';
import { NotFoundComponent } from './notfound/notfound.component';

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
      { path: 'album/:album', component: AlbumComponent },
      { path: 'video', component: PlaylistComponent },
      { path: 'photos', component: PhotosComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
