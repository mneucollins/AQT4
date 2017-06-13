import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing10Component } from './healing-10.component';

describe('Healing10Component', () => {
  let component: Healing10Component;
  let fixture: ComponentFixture<Healing10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
