import { TestBed } from '@angular/core/testing';

import { CalcapiService } from './calcapi.service';

describe('CalcapiService', () => {
  let service: CalcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
