import { TestBed } from '@angular/core/testing';

import { WineryService } from './winery.service';

describe('WineryService', () => {
  let service: WineryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
