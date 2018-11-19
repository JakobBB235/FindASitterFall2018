import { TestBed, inject } from '@angular/core/testing';

import { InitialStateService } from './initial-state.service';

describe('InitialStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialStateService]
    });
  });

  it('should be created', inject([InitialStateService], (service: InitialStateService) => {
    expect(service).toBeTruthy();
  }));
});
