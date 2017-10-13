import { TestBed, inject } from '@angular/core/testing';

import { GetscoreService } from './getscore.service';

describe('GetscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetscoreService]
    });
  });

  it('should be created', inject([GetscoreService], (service: GetscoreService) => {
    expect(service).toBeTruthy();
  }));
});
