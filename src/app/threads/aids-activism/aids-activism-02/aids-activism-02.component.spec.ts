import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivism02Component } from './aids-activism-02.component';

describe('AidsActivism02Component', () => {
  let component: AidsActivism02Component;
  let fixture: ComponentFixture<AidsActivism02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivism02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivism02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
