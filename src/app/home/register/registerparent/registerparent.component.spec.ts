import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterparentComponent } from './registerparent.component';

describe('RegisterparentComponent', () => {
  let component: RegisterparentComponent;
  let fixture: ComponentFixture<RegisterparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
