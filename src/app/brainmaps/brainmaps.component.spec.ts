import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainmapsComponent } from './brainmaps.component';

describe('BrainmapsComponent', () => {
  let component: BrainmapsComponent;
  let fixture: ComponentFixture<BrainmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
