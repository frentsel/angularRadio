import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { BioComponent } from './artist/bio/bio.component';
import { PlaylistComponent } from './artist/playlist/playlist.component';
import { AlbumsComponent } from './artist/albums/albums.component';

import { SimilarComponent } from './similar/similar.component';

import { StationService } from './station/station.service';
import { HttpAppService } from './http-app.service';

import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './artist/photos/photos.component';

import { LightboxModule } from 'angular2-lightbox';
import { SearchModule } from './components/search/search.module';
import { TopAlbumsModule } from './components/top-albums/top-albums.module';

@NgModule({
	imports: [
		BrowserModule,
		SearchModule,
		TopAlbumsModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		LightboxModule,
		ReactiveFormsModule,
		NgxY2PlayerModule.forRoot(),
	],
	declarations: [
		AppComponent,
		ArtistComponent,
		BioComponent,
		PlaylistComponent,
		SimilarComponent,
		AlbumsComponent,
		PhotosComponent,
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
