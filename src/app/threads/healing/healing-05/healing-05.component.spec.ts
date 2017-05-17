import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing05Component } from './healing-05.component';

describe('Healing05Component', () => {
  let component: Healing05Component;
  let fixture: ComponentFixture<Healing05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
