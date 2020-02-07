import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  myfrugalmap: L.Map;
  ngOnInit() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  this.myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 2.5);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(this.myfrugalmap);

  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });

  this.touchMap();
  
}
touchMap(){
  this.myfrugalmap.on('click', (e : any) => { console.log(e.latlng); });
}
  
}





