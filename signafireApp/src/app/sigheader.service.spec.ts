import { TestBed } from '@angular/core/testing';

import { SigheaderService } from './sigheader.service';

describe('SigheaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigheaderService = TestBed.get(SigheaderService);
    expect(service).toBeTruthy();
  });
});
