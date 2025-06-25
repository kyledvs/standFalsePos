import { TestBed } from '@angular/core/testing';

import { ExcelRepServiceService } from './excel-rep-service.service';

describe('ExcelRepServiceService', () => {
  let service: ExcelRepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelRepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
