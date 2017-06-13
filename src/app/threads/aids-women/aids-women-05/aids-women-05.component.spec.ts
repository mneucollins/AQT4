import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen05Component } from './aids-women-05.component';

describe('AidsWomen05Component', () => {
  let component: AidsWomen05Component;
  let fixture: ComponentFixture<AidsWomen05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
