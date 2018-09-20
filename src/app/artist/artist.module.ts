import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPreviewModule } from '../components/artist-preview/artist-preview.module';
import { SimilarModule } from '../components/similar/similar.module';

const routes: Routes = [{
  path: '',
  component: ArtistComponent,
  children: [
    { path: '', redirectTo: 'bio', pathMatch: 'full' },
    { path: 'bio', loadChildren: 'app/artist/bio/bio.module#BioModule' },
    { path: 'playlist', loadChildren: 'app/artist/playlist/playlist.module#PlaylistModule' },
    // { path: 'albums/:album', loadChildren: 'app/artist/albums.module#AlbumsModule' },
    // { path: 'video', component: PlaylistComponent },
    { path: 'photos', loadChildren: 'app/artist/photos/photos.module#PhotosModule' },
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
