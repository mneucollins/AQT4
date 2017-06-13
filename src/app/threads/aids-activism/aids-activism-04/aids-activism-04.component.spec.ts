import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism04Component } from './aids-activism-04.component';

describe('AidsActivism04Component', () => {
  let component: AidsActivism04Component;
  let fixture: ComponentFixture<AidsActivism04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
