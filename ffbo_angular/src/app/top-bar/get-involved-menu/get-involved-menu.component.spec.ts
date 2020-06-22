import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedMenuComponent } from './get-involved-menu.component';

describe('GetInvolvedMenuComponent', () => {
  let component: GetInvolvedMenuComponent;
  let fixture: ComponentFixture<GetInvolvedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvolvedMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvolvedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
