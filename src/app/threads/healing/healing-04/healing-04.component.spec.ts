import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing04Component } from './healing-04.component';

describe('Healing04Component', () => {
  let component: Healing04Component;
  let fixture: ComponentFixture<Healing04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
