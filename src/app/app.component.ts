import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationRepository } from './services/location.repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
 longitude:number;
 latitude:number;
 tab:Promise<Location>;
  constructor(private  locationRepository: LocationRepository){

  }
  
  ngOnInit(): void {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([ 2.3253893852233887, 48.87563911932324], 10);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });


    console.log(this.locationRepository.getDataFromDB());

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);


   
    L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Marqueur').addTo(myfrugalmap).openPopup();
    
    
  }

  getData(content:Promise<Location> ){

  }




  title = 'Frontend-Rando';

  
  
}
