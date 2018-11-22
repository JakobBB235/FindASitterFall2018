import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindparentComponent } from './findparent.component';

describe('FindparentComponent', () => {
  let component: FindparentComponent;
  let fixture: ComponentFixture<FindparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
