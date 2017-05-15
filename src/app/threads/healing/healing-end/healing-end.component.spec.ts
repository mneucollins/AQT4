import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingEndComponent } from './healing-end.component';

describe('HealingEndComponent', () => {
  let component: HealingEndComponent;
  let fixture: ComponentFixture<HealingEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
