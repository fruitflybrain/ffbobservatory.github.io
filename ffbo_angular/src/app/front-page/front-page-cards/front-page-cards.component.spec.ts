import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCardsComponent } from './front-page-cards.component';

describe('FrontPageCardsComponent', () => {
  let component: FrontPageCardsComponent;
  let fixture: ComponentFixture<FrontPageCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
