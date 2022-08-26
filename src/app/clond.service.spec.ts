import { TestBed } from '@angular/core/testing';

import { CloudService } from './clond.service';

describe('ClondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudService = TestBed.get(CloudService);
    expect(service).toBeTruthy();
  });
});
