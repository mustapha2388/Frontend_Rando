
import { Injectable } from "@angular/core"; 
import { BehaviorSubject, Observable } from 'rxjs';
import { Treks } from '../metier/treks';
import { Page } from '../metier/page';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable() 

export class TrekRepositoryService{
private serviceUrl : string = 'http://localhost:8080/accueil' ;
private serviceUrlImg : string = 'http://localhost:8080/images' ;

// pagination
private noPage: number;
private taillePage: number;

private treksSubject : BehaviorSubject<Page<Treks>>;

 // injection du requetteur
 constructor(private http : HttpClient) {
    this.noPage = 0;
    this.taillePage = 8;
    this.treksSubject = new BehaviorSubject(Page.emptyPage<Treks>());
  }

  public getTreksAsObservable() : Observable<Page<Treks>> {
    return this.treksSubject.asObservable();
  }

  public refreshListe() :void  {
    let urlParams : HttpParams = new HttpParams().set('page', "" + this.noPage)
                                                 .set('size', "" + this.taillePage);
    // j'envoie la requete ajax
    // quand j'ai la reponse, je republie dans picturesSubject
    this.http.get<Page<Treks>>(this.serviceUrl, {params: urlParams})
             .subscribe(p => this.treksSubject.next(p),
                        err => this.treksSubject.next(Page.emptyPage<Treks>()));
  }

  public setNopage(noPage : number) : void {
    this.noPage = noPage;
    this.refreshListe();
  }


  // genere l'url correcte pour afficher une image
  public getImageByUrl(id : number) : string {
    return `${this.serviceUrlImg}/${id}/thumbdata`;
  }
  


}