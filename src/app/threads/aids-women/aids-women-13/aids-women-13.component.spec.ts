import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen13Component } from './aids-women-13.component';

describe('AidsWomen13Component', () => {
  let component: AidsWomen13Component;
  let fixture: ComponentFixture<AidsWomen13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
