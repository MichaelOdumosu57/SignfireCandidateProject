import { TestBed } from '@angular/core/testing';

import { StarquantityService } from './starquantity.service';

describe('StarquantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarquantityService = TestBed.get(StarquantityService);
    expect(service).toBeTruthy();
  });
});
