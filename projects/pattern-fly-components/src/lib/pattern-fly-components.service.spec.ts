import { TestBed } from '@angular/core/testing';

import { PatternFlyComponentsService } from './pattern-fly-components.service';

describe('PatternFlyComponentsService', () => {
  let service: PatternFlyComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternFlyComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
