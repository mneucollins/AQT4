import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen08Component } from './aids-women-08.component';

describe('AidsWomen08Component', () => {
  let component: AidsWomen08Component;
  let fixture: ComponentFixture<AidsWomen08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
