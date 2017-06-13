import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism07Component } from './aids-activism-07.component';

describe('AidsActivism07Component', () => {
  let component: AidsActivism07Component;
  let fixture: ComponentFixture<AidsActivism07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
