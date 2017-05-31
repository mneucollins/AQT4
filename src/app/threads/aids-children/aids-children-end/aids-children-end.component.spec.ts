import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsChildrenEndComponent } from './aids-children-end.component';

describe('AidsChildrenEndComponent', () => {
  let component: AidsChildrenEndComponent;
  let fixture: ComponentFixture<AidsChildrenEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsChildrenEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsChildrenEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
