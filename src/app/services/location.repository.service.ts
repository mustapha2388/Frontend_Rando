import { Injectable } from '@angular/core';
import { Location } from '../metier/location';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

  
export class LocationRepository {

    private serviceUrl: string = "http://localhost:8080/liste";


    constructor(private http: HttpClient) { }

    public getDataFromDB() : Promise<Location> {
        return this.http.get<Location>(`${this.serviceUrl}`)
                        .toPromise();
      }

      // Creation et retour d'un observable (objet qui émet des informations)
      public getDataByObservable(): Observable<any>{
        return this.http.get(`${this.serviceUrl}`);
        //return null;
      }



}