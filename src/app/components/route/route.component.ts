import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Route } from 'src/app/metier/route';
import { Treks } from 'src/app/metier/treks';
import { BehaviorSubject } from 'rxjs';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  routes: Page<Route>;
  treks: Page<Treks>;

  // pagination
  noPage: number;
  taillePage: number;
  totalItems: number;


  constructor(private activeRoute: ActivatedRoute, private trekRepositoryService: TrekRepositoryService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = Number(params.id);
      console.log('id est : ' + id );
      this.showFromData(id);

    });
  }

  showFromData(id: number) {
    this.trekRepositoryService.getTreksAsObservable().subscribe(repHttpJson => {
      console.log(repHttpJson);
      this.treks = repHttpJson;
    });
  }
}
