import { TestBed } from '@angular/core/testing';

import { SystemsTechniciansService } from './systems-technicians.service';

describe('SystemsTechniciansService', () => {
  let service: SystemsTechniciansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemsTechniciansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
