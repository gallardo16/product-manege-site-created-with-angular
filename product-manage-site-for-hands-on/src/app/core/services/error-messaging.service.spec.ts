import { TestBed } from '@angular/core/testing';

import { ErrorMessagingService } from './error-messaging.service';

xdescribe('ErrorMessagingService', () => {
  let service: ErrorMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
