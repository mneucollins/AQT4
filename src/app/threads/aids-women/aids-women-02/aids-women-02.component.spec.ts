import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomen02Component } from './aids-women-02.component';

describe('AidsWomen02Component', () => {
  let component: AidsWomen02Component;
  let fixture: ComponentFixture<AidsWomen02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomen02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomen02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
