import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen01Component } from './aids-women-01.component';

describe('AidsWomen01Component', () => {
  let component: AidsWomen01Component;
  let fixture: ComponentFixture<AidsWomen01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
