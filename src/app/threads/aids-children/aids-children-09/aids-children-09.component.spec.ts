import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren09Component } from './aids-children-09.component';

describe('AidsChildren09Component', () => {
  let component: AidsChildren09Component;
  let fixture: ComponentFixture<AidsChildren09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
