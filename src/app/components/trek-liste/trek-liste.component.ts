import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/metier/page';
import { Treks } from 'src/app/metier/treks';
import { Subscription } from 'rxjs';
import { TrekRepositoryService } from 'src/app/services/trek.repository.service';

@Component({
  selector: 'app-trek-liste',
  templateUrl: './trek-liste.component.html',
  styleUrls: ['./trek-liste.component.css']
})
export class TrekListeComponent implements OnInit {

  treks: Page<Treks>;

  // pagination
  noPage: number;
  taillePage: number;
  totalItems: number;

  private trekSubscription: Subscription;

  constructor(
    private trekRepositoryService: TrekRepositoryService,
      ) { }

  ngOnInit() {
    this.noPage = 1;
    this.taillePage = 6;
    this.totalItems = 0;
    this.treks = Page.emptyPage<Treks>();
    this.trekRepositoryService.getTreksAsObservable()
    .subscribe(repHttpJson => {
      this.noPage = repHttpJson.number + 1;
      this.taillePage = repHttpJson.size;
      this.totalItems = repHttpJson.totalElements;
      this.treks = repHttpJson;
    });
     // requetage initial des images
    this.trekRepositoryService.refreshListe();
  }

  public onPageChanged(event: { page: number; }): void {
    this.trekRepositoryService.setNopage(event.page - 1);
  }

  public getImageUrl(id: number): string {
    return this.trekRepositoryService.getImageByUrl(id);
  }

}
