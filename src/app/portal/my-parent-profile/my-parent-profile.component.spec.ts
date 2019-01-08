import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentProfileComponent } from './my-parent-profile.component';

describe('MyParentProfileComponent', () => {
  let component: MyParentProfileComponent;
  let fixture: ComponentFixture<MyParentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
