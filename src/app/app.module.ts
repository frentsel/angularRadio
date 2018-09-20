import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppComponent } from './app.component';

import { StationService } from './station/station.service';
import { HttpAppService } from './http-app.service';

import { AppRoutingModule } from './app-routing.module';

import { LightboxModule } from 'angular2-lightbox';

import { SearchModule } from './components/search/search.module';

@NgModule({
	imports: [
		BrowserModule,
		SearchModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		LightboxModule,
		ReactiveFormsModule,
		NgxY2PlayerModule.forRoot(),
	],
	declarations: [
		AppComponent,
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
