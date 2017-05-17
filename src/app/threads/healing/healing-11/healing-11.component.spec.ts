import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing11Component } from './healing-11.component';

describe('Healing11Component', () => {
  let component: Healing11Component;
  let fixture: ComponentFixture<Healing11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
