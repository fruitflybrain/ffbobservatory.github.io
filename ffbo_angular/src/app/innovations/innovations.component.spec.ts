import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationsComponent } from './innovations.component';

describe('InnovationsComponent', () => {
  let component: InnovationsComponent;
  let fixture: ComponentFixture<InnovationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
