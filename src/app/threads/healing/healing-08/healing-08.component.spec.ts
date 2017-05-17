import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing08Component } from './healing-08.component';

describe('Healing08Component', () => {
  let component: Healing08Component;
  let fixture: ComponentFixture<Healing08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
