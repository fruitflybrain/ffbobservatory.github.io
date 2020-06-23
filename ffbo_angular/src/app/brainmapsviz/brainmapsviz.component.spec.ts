import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainmapsvizComponent } from './brainmapsviz.component';

describe('BrainmapsvizComponent', () => {
  let component: BrainmapsvizComponent;
  let fixture: ComponentFixture<BrainmapsvizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainmapsvizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainmapsvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
