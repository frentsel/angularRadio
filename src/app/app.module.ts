import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './components/search/search.module';
import { AppComponent } from './app.component';
import { StationService } from './station/station.service';
import { LastFmService } from './lastfm.service';

@NgModule({
	imports: [
		BrowserModule,
		SearchModule,
		AppRoutingModule,
		HttpModule
	],
	declarations: [
		AppComponent,
	],
	providers: [
		StationService,
		LastFmService
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
