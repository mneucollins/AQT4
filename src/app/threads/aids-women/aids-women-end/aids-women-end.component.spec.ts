import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsWomenEndComponent } from './aids-women-end.component';

describe('AidsWomenEndComponent', () => {
  let component: AidsWomenEndComponent;
  let fixture: ComponentFixture<AidsWomenEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsWomenEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsWomenEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
