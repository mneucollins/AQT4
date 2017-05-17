import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing03Component } from './healing-03.component';

describe('Healing03Component', () => {
  let component: Healing03Component;
  let fixture: ComponentFixture<Healing03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
