import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing12Component } from './healing-12.component';

describe('Healing12Component', () => {
  let component: Healing12Component;
  let fixture: ComponentFixture<Healing12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
