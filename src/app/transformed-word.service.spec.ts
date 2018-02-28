import { TestBed, inject } from '@angular/core/testing';

import { TransformedWordService } from './transformed-word.service';

describe('TransformedWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformedWordService]
    });
  });

  it('should be created', inject([TransformedWordService], (service: TransformedWordService) => {
    expect(service).toBeTruthy();
  }));
});
