import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen06Component } from './aids-women-06.component';

describe('AidsWomen06Component', () => {
  let component: AidsWomen06Component;
  let fixture: ComponentFixture<AidsWomen06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
