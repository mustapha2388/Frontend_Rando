import { TrekComponent } from './components/trek/trek.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationRepository } from './services/location.repository.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './components/location/location.component';
import { TrekListeComponent } from './components/trek-liste/trek-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { TrekRepositoryService } from './services/trek.repository.service';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RouteRepositoryService } from './services/route.repository.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditionComponent } from './components/edition/edition.component';
import { CreationComponent } from './components/creation/creation.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    TrekListeComponent,
    TrekComponent,
    NavBarComponent,
    EditionComponent,
    CreationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LocationRepository,
    TrekRepositoryService, RouteRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
