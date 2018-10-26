import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbabyComponent } from './findbaby.component';

describe('FindbabyComponent', () => {
  let component: FindbabyComponent;
  let fixture: ComponentFixture<FindbabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
