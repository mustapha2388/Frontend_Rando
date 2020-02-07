import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Route } from 'src/app/metier/route';
import { Trek } from 'src/app/metier/treks';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
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
  trekId: number;

  servuiceUrl = 'http://localhost:8080/treks/';

  mytreks: Map<number, L.GeoJSON> = new Map();
  myfrugalmap: L.Map;

  constructor(
    private activeRoute: ActivatedRoute,
    private trekRepositoryService: TrekRepositoryService,
    private http: HttpClient,
    private  navigateUrl : Location) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = Number(params.id);
      this.trekId = id;
      this.trekRepositoryService.getTrekByID(id).subscribe(v => {
        this.trek = v;

      });
    });


    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap');

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myfrugalmap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.getAllRoutes();
  }



  getAllRoutes() {
    this.http.get(this.servuiceUrl + this.trekId).subscribe((data: any) => {
      data.routes.forEach((rt: any) => {
        rt.locations.forEach(loc => {
          let ltrek = L.geoJSON(loc.centre_geo).addTo(this.myfrugalmap);
          this.mytreks.set(loc.id, ltrek);
        });
      });
      this.zoomOnRoute(this.trek.routes[0]);
    });
  }

  zoomOnRoute(routeData: Route) {
    this.myfrugalmap.fitBounds(this.mytreks.get(routeData.locations[0].id).getBounds());
  }


  goBack() { 
    this.navigateUrl.back();
  } 

}




