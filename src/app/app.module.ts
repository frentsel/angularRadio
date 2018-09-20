import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StationService } from './station/station.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './components/search/search.module';

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
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
