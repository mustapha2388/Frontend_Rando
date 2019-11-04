import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationRepository } from './services/location.repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

 

  title = 'Frontend-Rando';
  
}
