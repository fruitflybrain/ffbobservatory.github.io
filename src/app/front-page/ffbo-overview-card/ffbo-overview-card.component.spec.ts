import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFBOOverviewCardComponent } from './ffbo-overview-card.component';

describe('FFBOOverviewCardComponent', () => {
  let component: FFBOOverviewCardComponent;
  let fixture: ComponentFixture<FFBOOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFBOOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFBOOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
