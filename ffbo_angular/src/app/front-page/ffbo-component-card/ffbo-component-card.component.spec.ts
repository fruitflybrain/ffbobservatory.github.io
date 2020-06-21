import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFBOComponentCardComponent } from './ffbo-component-card.component';

describe('FFBOComponentCardComponent', () => {
  let component: FFBOComponentCardComponent;
  let fixture: ComponentFixture<FFBOComponentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFBOComponentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFBOComponentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
