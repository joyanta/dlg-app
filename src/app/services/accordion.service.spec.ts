import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';


import { AccordionService } from './accordion.service';

describe('AccordionService', () => {
  let service: AccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(AccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should restun values when subscribed', () => {

    const expectedVal = [{
      id: '1',
      question: 'dedede',
      answer: 'dedede'
    }];
    spyOn(service['httpClient'], 'get').and.returnValue(of(expectedVal));

    service.getData().subscribe(result => {
      expect(result).toEqual(expectedVal);
    });

  });

});
