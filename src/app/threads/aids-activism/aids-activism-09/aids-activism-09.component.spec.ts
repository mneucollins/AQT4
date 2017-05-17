import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism09Component } from './aids-activism-09.component';

describe('AidsActivism09Component', () => {
  let component: AidsActivism09Component;
  let fixture: ComponentFixture<AidsActivism09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
