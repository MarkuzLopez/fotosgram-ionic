import { TestBed } from '@angular/core/testing';

import { UiservicesService } from './uiservices.service';

describe('UiservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiservicesService = TestBed.get(UiservicesService);
    expect(service).toBeTruthy();
  });
});
