import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVizCardComponent } from './map-viz-card.component';

describe('MapVizCardComponent', () => {
  let component: MapVizCardComponent;
  let fixture: ComponentFixture<MapVizCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapVizCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapVizCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
