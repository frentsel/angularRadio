import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PreviewStationComponent } from './components/preview-station/preview-station.component';
import { StationComponent } from './station/station.component';
import { ArtistComponent } from './artist/artist.component';
import { BioComponent } from './artist/bio/bio.component';
import { PlaylistComponent } from './artist/playlist/playlist.component';
import { ArtistPreviewComponent } from './artist/artist-preview/artist-preview.component';
import { TracksComponent } from './tracks/tracks.component';
import { TopAlbumsComponent } from './top-albums/top-albums.component';
import { AlbumsComponent } from './artist/albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './notfound/notfound.component';

import { SimilarComponent } from './similar/similar.component';
import { SearchComponent } from './search/search.component';
import { CommentsComponent } from './comments/comments.component';

import { StationService } from './station/station.service';
import { HttpAppService } from './http-app.service';

import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './artist/photos/photos.component';

import { LightboxModule } from 'angular2-lightbox';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		LightboxModule,
		ReactiveFormsModule,
		NgxY2PlayerModule.forRoot()
	],
	exports: [
		SearchComponent,
	],
	declarations: [
		AppComponent,
		ListComponent,
		StationComponent,
		ArtistComponent,
		BioComponent,
		PlaylistComponent,
		ArtistPreviewComponent,
		SimilarComponent,
		TracksComponent,
		TopAlbumsComponent,
		AlbumsComponent,
		AlbumComponent,
		NotFoundComponent,
		SearchComponent,
		CommentsComponent,
		PhotosComponent,
		PreviewStationComponent,
	],
	providers: [
		StationService,
		HttpAppService,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {
}
