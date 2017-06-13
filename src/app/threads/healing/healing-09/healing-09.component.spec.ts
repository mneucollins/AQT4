import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing09Component } from './healing-09.component';

describe('Healing09Component', () => {
  let component: Healing09Component;
  let fixture: ComponentFixture<Healing09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
