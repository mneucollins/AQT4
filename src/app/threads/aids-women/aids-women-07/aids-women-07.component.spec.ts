import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen07Component } from './aids-women-07.component';

describe('AidsWomen07Component', () => {
  let component: AidsWomen07Component;
  let fixture: ComponentFixture<AidsWomen07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
