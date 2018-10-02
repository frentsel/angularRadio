import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist.component';
import { ArtistPreviewModule } from '../../components/artist-preview/artist-preview.module';
import { SimilarModule } from '../../components/similar/similar.module';

const routes: Routes = [{
  path: '',
  component: ArtistComponent,
  children: [
    { path: ':artist', redirectTo: 'bio', pathMatch: 'full' },
    { path: ':artist/bio', loadChildren: 'app/pages/artist/bio/bio.module#BioModule' },
    { path: ':artist/playlist', loadChildren: 'app/pages/artist/playlist/playlist.module#PlaylistModule' },
    { path: ':artist/albums', loadChildren: 'app/pages/artist/albums/albums.module#AlbumsModule' },
    { path: ':artist/album/:album', loadChildren: 'app/pages/album/album.module#AlbumModule' },
    { path: ':artist/video', loadChildren: 'app/pages/artist/playlist/playlist.module#PlaylistModule' },
    { path: ':artist/photos', loadChildren: 'app/pages/artist/photos/photos.module#PhotosModule' },
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArtistPreviewModule,
    SimilarModule
  ],
  declarations: [
    ArtistComponent,
  ],
  exports: [
    ArtistComponent
  ]
})
export class ArtistModule { }
