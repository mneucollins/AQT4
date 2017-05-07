import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism03Component } from './aids-activism-03.component';

describe('AidsActivism03Component', () => {
  let component: AidsActivism03Component;
  let fixture: ComponentFixture<AidsActivism03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
