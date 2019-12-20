import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekComponent } from './trek.component';

describe('RouteComponent', () => {
  let component: TrekComponent;
  let fixture: ComponentFixture<TrekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
