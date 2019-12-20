
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trek } from '../metier/treks';
import { Page } from '../metier/page';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()

export class TrekRepositoryService {
private serviceUrl = 'http://localhost:8080/treks' ;
private serviceUrlImg = 'http://localhost:8080/images' ;

// pagination
private noPage: number;
private taillePage: number;

private treksSubject: BehaviorSubject<Page<Trek>>;

 // injection du requetteur
 constructor(private http: HttpClient) {
    this.noPage = 0;
    this.taillePage = 8;
    this.treksSubject = new BehaviorSubject(Page.emptyPage<Trek>());
  }

  public getTrekAsObservable(): Observable<Page<Trek>> {
    return this.treksSubject.asObservable();
  }

  public getAllTrek(): void  {
    const urlParams: HttpParams = new HttpParams().set('page', '' + this.noPage)
                                                 .set('size', '' + this.taillePage);
    // j'envoie la requete ajax
    // quand j'ai la reponse, je republie dans picturesSubject
    this.http.get<Page<Trek>>(this.serviceUrl, {params: urlParams})
             .subscribe(p => this.treksSubject.next(p),
                        err => this.treksSubject.next(Page.emptyPage<Trek>()));
  }

  public getTrekByID(id: number): Observable<Trek>  {
    return this.http.get<Trek>(this.serviceUrl + '/' + id);
  }

  public setNopage(noPage: number): void {
    this.noPage = noPage;
    this.getAllTrek();
  }


  // genere l'url correcte pour afficher une image
  public getImageByUrl(id: number): string {
    return `${this.serviceUrlImg}/${id}/thumbdata`;
  }
}
