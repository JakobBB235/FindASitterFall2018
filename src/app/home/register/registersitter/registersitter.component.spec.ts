import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersitterComponent } from './registersitter.component';

describe('RegistersitterComponent', () => {
  let component: RegistersitterComponent;
  let fixture: ComponentFixture<RegistersitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
