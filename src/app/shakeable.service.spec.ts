import { TestBed } from '@angular/core/testing';

import { ShakeableService } from './shakeable.service';

describe('ShakeableService', () => {
  let service: ShakeableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShakeableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
