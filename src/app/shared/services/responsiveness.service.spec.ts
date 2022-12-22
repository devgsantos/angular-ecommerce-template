import { TestBed } from '@angular/core/testing';

import { ResponsivenessService } from './responsiveness.service';

describe('ResponsivenessService', () => {
  let service: ResponsivenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsivenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
