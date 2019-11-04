import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationRepository } from './services/location.repository.service';
import { HttpClientModule } from "@angular/common/http";
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LocationRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
