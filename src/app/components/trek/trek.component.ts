import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Route } from 'src/app/metier/route';
import { Trek } from 'src/app/metier/treks';
import { BehaviorSubject } from 'rxjs';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';
import { ActivatedRoute } from '@angular/router';

import * as L from 'leaflet';

import { HttpClient } from '@angular/common/http';
import { Layer } from 'leaflet';
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
  longitude : any;
  latitude: any;
  servuiceUrl = 'http://localhost:8080/treks/';
  mytreks : Map<number, L.GeoJSON> = new Map();
  myfrugalmap  : L.Map;
  constructor(private activeRoute: ActivatedRoute,
     private trekRepositoryService: TrekRepositoryService,
     private http:HttpClient) { }

/*  
*/
  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = Number(params.id);
      this.trekId = id;
      console.log('id est : ' + id );
      this.showFromData(id);
      this.trekRepositoryService.getTrekByID(id).subscribe(v => {
        this.trek = v;
       
      });
      console.log(this.trek);
    });
    

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
   this.myfrugalmap= L.map('frugalmap').setView([ -0.1284027099609375, 51.50639189133809], 18);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(this.myfrugalmap);

  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
 
 
  // this.http.get('http://localhost:8080/treks').subscribe((data: any) => {
  //   data.content.forEach((tr : Trek) => {
  //     tr.routes.forEach((rt : any) => {
  //       rt.locations.forEach(loc => {
  //         L.geoJSON(loc.centre_geo).addTo(myfrugalmap);
  //       })
  //     })
  //   });
  // });


  
  this.http.get(this.servuiceUrl+this.trekId).subscribe((data: any) => {
    data.routes.forEach((rt : any) => {
      //let ltrek = L.geoJSON(rt.locations[0].centre_geo).addTo(myfrugalmap);
      

      // this.longitude = rt.locations[0].centre_geo.coordinates[0];
      // this.latitude = rt.locations[0].centre_geo.coordinates[1];
      
        rt.locations.forEach(loc => {
          let ltrek = L.geoJSON(loc.centre_geo).addTo(this.myfrugalmap);
          
          this.mytreks.set(loc.id, ltrek);

        });
        //myfrugalmap.fitBounds(ltrek.getBounds())
      });
      this.zoomOnRoute(this.trek.routes[0]);
    });


  }

  showFromData(id: number) {
    this.trekRepositoryService.getTrekAsObservable().subscribe(repHttpJson => {
      console.log(repHttpJson);
      this.treks = repHttpJson;
    });

  }

  zoomOnRoute(routeData : Route) {

    //console.log("here " +this.mytreks.get(routeData.locations[0].centre_geo));
    this.myfrugalmap.fitBounds(this.mytreks.get(routeData.locations[0].id).getBounds());
  }
}
