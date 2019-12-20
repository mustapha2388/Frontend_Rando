import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from '../metier/page';
import { Route } from '../metier/route';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class RouteRepositoryService {
    private serviceUrl = ' http://localhost:8080/randonneeDetail';
    private serviceUrlImg = 'http://localhost:8080/images' ;
// pagination
private noPage: number;
private taillePage: number;

private routeSubject: BehaviorSubject<Page<Route>>;


constructor(private http: HttpClient) {
    this.noPage = 0;
    this.taillePage = 8;
    this.routeSubject = new BehaviorSubject(Page.emptyPage<Route>());
}

public getRoutesAsObservable(): Observable<Page<Route>> {
    return this.routeSubject.asObservable();
}

public getAllTrek(): void {

    const urlParams: HttpParams = new HttpParams().set('page', '' + this.noPage)
                                                 .set('size', '' + this.taillePage);

    this.http.get<Page<Route>>(this.serviceUrl, {params: urlParams})
                                                 .subscribe(p => this.routeSubject.next(p),
                                                            err => this.routeSubject.next(Page.emptyPage<Route>()));
}

public getImageByUrl(id: number): string {
    return `${this.serviceUrlImg}/${id}/thumbdata`;
  }

}

