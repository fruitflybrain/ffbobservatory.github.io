import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFBOComponentDialogComponent } from './ffbo-component-dialog.component';

describe('FFBOComponentDialogComponent', () => {
  let component: FFBOComponentDialogComponent;
  let fixture: ComponentFixture<FFBOComponentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFBOComponentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFBOComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
