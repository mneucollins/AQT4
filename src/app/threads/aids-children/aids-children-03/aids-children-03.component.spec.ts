import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren03Component } from './aids-children-03.component';

describe('AidsChildren03Component', () => {
  let component: AidsChildren03Component;
  let fixture: ComponentFixture<AidsChildren03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
