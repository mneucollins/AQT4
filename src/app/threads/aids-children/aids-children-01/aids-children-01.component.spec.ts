import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren01Component } from './aids-children-01.component';

describe('AidsChildren01Component', () => {
  let component: AidsChildren01Component;
  let fixture: ComponentFixture<AidsChildren01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
