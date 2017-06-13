import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen04Component } from './aids-women-04.component';

describe('AidsWomen04Component', () => {
  let component: AidsWomen04Component;
  let fixture: ComponentFixture<AidsWomen04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
