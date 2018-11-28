import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKidComponent } from './create-kid.component';

describe('CreateKidComponent', () => {
  let component: CreateKidComponent;
  let fixture: ComponentFixture<CreateKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
