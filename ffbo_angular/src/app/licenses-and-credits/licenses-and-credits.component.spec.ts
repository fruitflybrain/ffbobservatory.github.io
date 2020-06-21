import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesAndCreditsComponent } from './licenses-and-credits.component';

describe('LicensesAndCreditsComponent', () => {
  let component: LicensesAndCreditsComponent;
  let fixture: ComponentFixture<LicensesAndCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensesAndCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesAndCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
