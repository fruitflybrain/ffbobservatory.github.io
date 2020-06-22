import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainmapvizMenuComponent } from './brainmapviz-menu.component';

describe('BrainmapvizMenuComponent', () => {
  let component: BrainmapvizMenuComponent;
  let fixture: ComponentFixture<BrainmapvizMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainmapvizMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainmapvizMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
