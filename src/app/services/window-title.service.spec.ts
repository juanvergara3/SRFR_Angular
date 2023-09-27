import { TestBed } from '@angular/core/testing';

import { WindowTitleService } from './window-title.service';

describe('WindowTitleService', () => {
  let service: WindowTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
