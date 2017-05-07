import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism05Component } from './aids-activism-05.component';

describe('AidsActivism05Component', () => {
  let component: AidsActivism05Component;
  let fixture: ComponentFixture<AidsActivism05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
