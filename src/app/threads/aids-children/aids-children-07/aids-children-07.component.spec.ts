import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren07Component } from './aids-children-07.component';

describe('AidsChildren07Component', () => {
  let component: AidsChildren07Component;
  let fixture: ComponentFixture<AidsChildren07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
