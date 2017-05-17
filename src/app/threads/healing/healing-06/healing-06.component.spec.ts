import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing06Component } from './healing-06.component';

describe('Healing06Component', () => {
  let component: Healing06Component;
  let fixture: ComponentFixture<Healing06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
