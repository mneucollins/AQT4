import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen11Component } from './aids-women-11.component';

describe('AidsWomen11Component', () => {
  let component: AidsWomen11Component;
  let fixture: ComponentFixture<AidsWomen11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
