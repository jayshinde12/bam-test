import { TestBed } from '@angular/core/testing';

import { TransectionsService } from './transections.service';

describe('TransectionsService', () => {
  let service: TransectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
