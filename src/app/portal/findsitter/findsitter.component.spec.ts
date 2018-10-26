import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsitterComponent } from './findsitter.component';

describe('FindsitterComponent', () => {
  let component: FindsitterComponent;
  let fixture: ComponentFixture<FindsitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindsitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
