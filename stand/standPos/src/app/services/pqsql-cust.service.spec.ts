import { TestBed } from '@angular/core/testing';

import { PqsqlCustService } from './pqsql-cust.service';

describe('PqsqlCustService', () => {
  let service: PqsqlCustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqsqlCustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
