import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism08Component } from './aids-activism-08.component';

describe('AidsActivism08Component', () => {
  let component: AidsActivism08Component;
  let fixture: ComponentFixture<AidsActivism08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
