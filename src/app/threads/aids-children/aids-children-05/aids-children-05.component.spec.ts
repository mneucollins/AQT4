import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren05Component } from './aids-children-05.component';

describe('AidsChildren05Component', () => {
  let component: AidsChildren05Component;
  let fixture: ComponentFixture<AidsChildren05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
