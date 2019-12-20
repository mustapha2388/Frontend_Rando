import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Route } from 'src/app/metier/route';
import { Trek } from 'src/app/metier/treks';
import { BehaviorSubject } from 'rxjs';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private activeRoute: ActivatedRoute, private trekRepositoryService: TrekRepositoryService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = Number(params.id);
      console.log('id est : ' + id );
      this.showFromData(id);
      this.trekRepositoryService.getTrekByID(id).subscribe(v => this.trek = v);
      console.log(this.trek);
    });

  }

  showFromData(id: number) {
    this.trekRepositoryService.getTrekAsObservable().subscribe(repHttpJson => {
      console.log(repHttpJson);
      this.treks = repHttpJson;
    });
  }
}
