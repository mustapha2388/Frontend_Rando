import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationRepository } from './services/location.repository.service';
import { HttpClientModule } from "@angular/common/http";
import { LocationComponent } from './components/location/location.component';
import { TrekListeComponent } from './components/trek-liste/trek-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from "@angular/forms";
import { TrekRepositoryService } from './services/trek.repository.service';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    TrekListeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [LocationRepository,TrekRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
