import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekListeComponent } from './trek-liste.component';

describe('TrekListeComponent', () => {
  let component: TrekListeComponent;
  let fixture: ComponentFixture<TrekListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
