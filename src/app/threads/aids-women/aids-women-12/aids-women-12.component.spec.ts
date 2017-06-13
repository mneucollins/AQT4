import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen12Component } from './aids-women-12.component';

describe('AidsWomen12Component', () => {
  let component: AidsWomen12Component;
  let fixture: ComponentFixture<AidsWomen12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
