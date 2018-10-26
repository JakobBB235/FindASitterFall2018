import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbabyComponent } from './registerbaby.component';

describe('RegisterbabyComponent', () => {
  let component: RegisterbabyComponent;
  let fixture: ComponentFixture<RegisterbabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
