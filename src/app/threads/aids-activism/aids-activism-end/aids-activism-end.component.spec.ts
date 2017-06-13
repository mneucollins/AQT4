import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsActivismEndComponent } from './aids-activism-end.component';

describe('AidsActivismEndComponent', () => {
  let component: AidsActivismEndComponent;
  let fixture: ComponentFixture<AidsActivismEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsActivismEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsActivismEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
