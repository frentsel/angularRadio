import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './components/search/search.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { AudioPlayerModule } from './components/audio-player/audio-player.module';

@NgModule({
	imports: [
		BrowserModule,
		SearchModule,
		AppRoutingModule,
		HttpClientModule,
		AudioPlayerModule
	],
	declarations: [
		AppComponent,
		AudioPlayerComponent,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
