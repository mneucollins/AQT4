import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing02Component } from './healing-02.component';

describe('Healing02Component', () => {
  let component: Healing02Component;
  let fixture: ComponentFixture<Healing02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
