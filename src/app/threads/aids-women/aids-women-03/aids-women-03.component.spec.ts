import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen03Component } from './aids-women-03.component';

describe('AidsWomen03Component', () => {
  let component: AidsWomen03Component;
  let fixture: ComponentFixture<AidsWomen03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
