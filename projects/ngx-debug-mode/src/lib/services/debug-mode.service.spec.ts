import { TestBed } from '@angular/core/testing';

import { DebugModeService } from './debug-mode.service';

describe('DarkModeService', () => {
  let service: DebugModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
