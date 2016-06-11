import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WixService } from './wix.service';

describe('Wix Service', () => {
  beforeEachProviders(() => [WixService]);

  it('should ...',
      inject([WixService], (service: WixService) => {
    expect(service).toBeTruthy();
  }));
});
