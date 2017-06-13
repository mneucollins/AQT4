import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrandomComponent } from './viewrandom.component';

describe('ViewrandomComponent', () => {
  let component: ViewrandomComponent;
  let fixture: ComponentFixture<ViewrandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
