import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism06Component } from './aids-activism-06.component';

describe('AidsActivism06Component', () => {
  let component: AidsActivism06Component;
  let fixture: ComponentFixture<AidsActivism06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
