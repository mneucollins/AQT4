import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren06Component } from './aids-children-06.component';

describe('AidsChildren06Component', () => {
  let component: AidsChildren06Component;
  let fixture: ComponentFixture<AidsChildren06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
