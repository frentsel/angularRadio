import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './components/search/search.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		SearchModule,
		AppRoutingModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
