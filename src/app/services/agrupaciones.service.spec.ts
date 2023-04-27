import { TestBed } from '@angular/core/testing';

import { AgrupacionesService } from './agrupaciones.service';

describe('AgrupacionesService', () => {
  let service: AgrupacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrupacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
