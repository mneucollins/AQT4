import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen10Component } from './aids-women-10.component';

describe('AidsWomen10Component', () => {
  let component: AidsWomen10Component;
  let fixture: ComponentFixture<AidsWomen10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
