import { TestBed } from '@angular/core/testing';

import { LibraryLabratService } from './library-labrat.service';

describe('LibraryLabratService', () => {
  let service: LibraryLabratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryLabratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
