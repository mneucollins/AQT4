import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing01Component } from './healing-01.component';

describe('Healing01Component', () => {
  let component: Healing01Component;
  let fixture: ComponentFixture<Healing01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healing01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Healing01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
