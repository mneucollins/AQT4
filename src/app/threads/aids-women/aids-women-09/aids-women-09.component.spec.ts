import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen09Component } from './aids-women-09.component';

describe('AidsWomen09Component', () => {
  let component: AidsWomen09Component;
  let fixture: ComponentFixture<AidsWomen09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
