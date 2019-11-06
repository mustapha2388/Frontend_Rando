import { Component, OnInit } from '@angular/core';
import { LocationRepository } from 'src/app/services/location.repository.service';
import * as L from 'leaflet';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  longitude: number = 2.3253893852233887;
  latitude: number = 48.87563911932324;
  tab: Promise<Location>;

  locationSubscribe: Subscription;
  locationSubject: Subject<Location>;
  
  ngOnInit(): void {}
  constructor(private locationRepository: LocationRepository){}

  showDataFromConsole() {
    this.locationRepository.
      getDataFromDB().then(
        response => {

          this.longitude = response.content[2].centre_geo.coordinates[0];
          this.latitude = response.content[2].centre_geo.coordinates[1];

          console.log("longitude:" + this.longitude + " latitude:" + this.latitude);

          console.log(response);
          // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
          const myfrugalmap = L.map('frugalmap').setView([this.latitude, this.longitude], 10);

          const myIcon = L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
          });

          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Capgemini Here'
          }).addTo(myfrugalmap);


          L.marker([this.latitude, this.longitude], { icon: myIcon }).bindPopup('Je suis un nouveau marqueur').addTo(myfrugalmap).openPopup();

        });
  }

  // Il faut observer, pour cela nous allons utiliser la méthode subscribe()
  // qui prendra 1 argument et 3 fonctions 
  showDataByObservable(){
    //console.log("in showDataByObservable ");
    this.locationSubscribe = this.locationRepository.getDataByObservable().subscribe(
      //Fonction OK, Execute le bloc de code à chaque fois qu'il reçoit une donnée
      (response) => {
        console.log(response);
        
        this.longitude = response.content[2].centre_geo.coordinates[0];
        this.latitude = response.content[2].centre_geo.coordinates[1];

        console.log("longitude:" + this.longitude + " latitude:" + this.latitude);

        console.log(response);
        // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
        const myfrugalmap = L.map('frugalmap').setView([this.latitude, this.longitude], 10);

        const myIcon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'Capgemini Here'
        }).addTo(myfrugalmap);


        L.marker([this.latitude, this.longitude], { icon: myIcon }).bindPopup('Je suis un nouveau marqueur').addTo(myfrugalmap).openPopup();

      },
      //Fonction Error, Execute le bloc de code si une erreur est survenue 
      (error) => {
        console.log("there is an error ");
      },
      //Fonction Completed, Execute le bloc de code dès que l'observable est terminé 
      () => {
        console.log("completed");
      }
    );
    
  // this.locationSubscribe.unsubscribe();
  }

}
