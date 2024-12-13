import { TestBed } from '@angular/core/testing';

import { ComidaitemsService } from './comidaitems.service';

describe('ComidaitemsService', () => {
  let service: ComidaitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComidaitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
