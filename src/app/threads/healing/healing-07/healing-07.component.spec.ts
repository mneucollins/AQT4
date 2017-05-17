import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing07Component } from './healing-07.component';

describe('Healing07Component', () => {
  let component: Healing07Component;
  let fixture: ComponentFixture<Healing07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
