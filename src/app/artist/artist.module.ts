import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { RouterModule, Routes } from '@angular/router';
import { TopAlbumsModule } from '../components/top-albums/top-albums.module';
import { BioComponent } from './bio/bio.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { ArtistPreviewModule } from '../components/artist-preview/artist-preview.module';
import { SimilarModule } from '../components/similar/similar.module';

const routes: Routes = [{
  path: '',
  component: ArtistComponent,
  children: [
    { path: '', redirectTo: 'bio', pathMatch: 'full' },
    { path: 'bio', component: BioComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:album', loadChildren: 'app/album/album.module#AlbumModule' },
    { path: 'video', component: PlaylistComponent },
    { path: 'photos', component: PhotosComponent },
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
    BioComponent,
    PlaylistComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  exports: [
    ArtistComponent
  ],
  providers: [],
})
export class ArtistModule { }
