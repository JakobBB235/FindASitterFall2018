import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysitterComponent } from './displaysitter.component';

describe('DisplaysitterComponent', () => {
  let component: DisplaysitterComponent;
  let fixture: ComponentFixture<DisplaysitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
