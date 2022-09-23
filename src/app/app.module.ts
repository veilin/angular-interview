import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { QuakeDetailComponent } from './quake-detail/quake-detail.component';
import { QuakeListComponent } from './quake-list/quake-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuakeDetailComponent,
    QuakeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
