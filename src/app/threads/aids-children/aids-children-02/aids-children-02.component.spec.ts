import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildren02Component } from './aids-children-02.component';

describe('AidsChildren02Component', () => {
  let component: AidsChildren02Component;
  let fixture: ComponentFixture<AidsChildren02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildren02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildren02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
