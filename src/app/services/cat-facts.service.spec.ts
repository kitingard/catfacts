import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CatFactsService } from './cat-facts.service';

describe('CatFactsService', () => {
  let service: CatFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatFactsService],
    });
    service = TestBed.inject(CatFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCatFacts function', () => {
    expect(service.getCatFacts).toBeTruthy();
  });
});
