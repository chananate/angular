import { TestBed } from '@angular/core/testing';

import { LibDepService } from './lib-dep.service';

describe('LibDepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibDepService = TestBed.get(LibDepService);
    expect(service).toBeTruthy();
  });
});
