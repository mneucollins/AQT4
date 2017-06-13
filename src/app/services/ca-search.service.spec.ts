/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaSearchService } from './ca-search.service';

describe('CaSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaSearchService]
    });
  });

  it('should ...', inject([CaSearchService], (service: CaSearchService) => {
    expect(service).toBeTruthy();
  }));
});
