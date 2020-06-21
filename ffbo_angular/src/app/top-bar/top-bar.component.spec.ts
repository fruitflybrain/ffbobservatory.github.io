import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFBONavBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: FFBONavBarComponent;
  let fixture: ComponentFixture<FFBONavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFBONavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFBONavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
