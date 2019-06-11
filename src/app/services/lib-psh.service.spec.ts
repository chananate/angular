import { TestBed } from '@angular/core/testing';

import { LibPshService } from './lib-psh.service';

describe('LibPshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibPshService = TestBed.get(LibPshService);
    expect(service).toBeTruthy();
  });
});
