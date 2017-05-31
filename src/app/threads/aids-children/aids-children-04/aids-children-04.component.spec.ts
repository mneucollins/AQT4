import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren04Component } from './aids-children-04.component';

describe('AidsChildren04Component', () => {
  let component: AidsChildren04Component;
  let fixture: ComponentFixture<AidsChildren04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
