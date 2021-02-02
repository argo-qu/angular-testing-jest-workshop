import {TestBed} from '@angular/core/testing';

import {SimpleService} from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should summarize numbers', () => {
    expect(service.getSumOfNumbers(1, 2, 3, 4, 5)).toEqual(15);
    expect(service.getSumOfNumbers(100, 1)).toEqual(101);
    expect(service.getSumOfNumbers(-300, 200)).toEqual(-100);
    expect(service.getSumOfNumbers(5)).toEqual(5);
    expect(service.getSumOfNumbers(-5)).toEqual(-5);
    expect(service.getSumOfNumbers()).toEqual(0);
  });

  // Кейс с некорректными значениями
  it('should handle wrong data', () => {
    // expect(service.getSumOfNumbers(1, '2' as unknown as number, 3, 4, 5)).toEqual(15);
  });
});
