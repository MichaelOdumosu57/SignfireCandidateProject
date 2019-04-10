import { TestBed } from '@angular/core/testing';

import { InputMQSService } from './input-mqs.service';

describe('InputMQSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputMQSService = TestBed.get(InputMQSService);
    expect(service).toBeTruthy();
  });
});
