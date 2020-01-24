import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Route } from 'src/app/metier/route';
import { Trek } from 'src/app/metier/treks';
import { BehaviorSubject } from 'rxjs';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';
import { ActivatedRoute } from '@angular/router';

import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-trek',
  templateUrl: './trek.component.html',
  styleUrls: ['./trek.component.css']
})
export class TrekComponent implements OnInit {

  routes: Page<Route>;
  treks: Page<Trek>;

  // pagination
  noPage: number;
  taillePage: number;
  totalItems: number;
  trek = new Trek({});

  servuiceUrl = 'http://localhost:8080/liste';

  constructor(private activeRoute: ActivatedRoute,
     private trekRepositoryService: TrekRepositoryService,
     private http:HttpClient) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = Number(params.id);
      console.log('id est : ' + id );
      this.showFromData(id);
      this.trekRepositoryService.getTrekByID(id).subscribe(v => this.trek = v);
      console.log(this.trek);
    });


    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 8);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);

  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
 
 
  this.http.get('http://localhost:8080/liste').subscribe((data: any) => {
    data.content.forEach(loc => {
      L.geoJSON(loc.centre_geo).addTo(myfrugalmap);
    });
  });

  }

  showFromData(id: number) {
    this.trekRepositoryService.getTrekAsObservable().subscribe(repHttpJson => {
      console.log(repHttpJson);
      this.treks = repHttpJson;
    });
  }
}
