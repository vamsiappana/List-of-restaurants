import { TestBed, inject } from '@angular/core/testing';

import { DatabindService } from './databind.service';

describe('DatabindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabindService]
    });
  });

  it('should be created', inject([DatabindService], (service: DatabindService) => {
    expect(service).toBeTruthy();
  }));
});
