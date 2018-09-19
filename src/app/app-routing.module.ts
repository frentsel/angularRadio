import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { GenresComponent } from './genres/genres.component';
import { StationComponent } from './station/station.component';
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
    { path: 'countries', component: CountriesComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'genres', component: GenresComponent },
    { path: 'station/:id', component: StationComponent },
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
