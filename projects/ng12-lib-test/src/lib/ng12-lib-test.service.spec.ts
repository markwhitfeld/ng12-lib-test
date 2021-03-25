import { TestBed } from '@angular/core/testing';

import { Ng12LibTestService } from './ng12-lib-test.service';

describe('Ng12LibTestService', () => {
  let service: Ng12LibTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng12LibTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
