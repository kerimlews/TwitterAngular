import { TestBed, inject } from '@angular/core/testing';

import { UserOverviewService } from './user-overview.service';

describe('UserOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserOverviewService]
    });
  });

  it('should be created', inject([UserOverviewService], (service: UserOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
