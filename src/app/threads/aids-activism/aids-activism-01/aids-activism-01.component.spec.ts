import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism01Component } from './aids-activism-01.component';

describe('AidsActivism01Component', () => {
  let component: AidsActivism01Component;
  let fixture: ComponentFixture<AidsActivism01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
