import { TestBed } from '@angular/core/testing';

import { TeamlistService } from './teamlist.service';

describe('TeamlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamlistService = TestBed.get(TeamlistService);
    expect(service).toBeTruthy();
  });
});
