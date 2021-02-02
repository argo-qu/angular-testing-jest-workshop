import {TestBed} from '@angular/core/testing';

import {e, goldenRatio, pi, SimpleWithMocksService} from './simple-with-mocks.service';
import {SimpleService} from '../simple/simple.service';

describe('SimpleWithMocksService - Basic Mocking', () => {
  let service: SimpleWithMocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SimpleService,
          useValue: {
            getSumOfNumbers: () => 10
          }
        }
      ]
    });
    service = TestBed.inject(SimpleWithMocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSumOfBasicConstants', () => {
    it('should calculate sum of basic constants', () => {
      const result = service.getSumOfBasicConstants();
      expect(result).toEqual(10);
    });

    it('should calculate sum of basic constants', () => {
      (service as any).simpleService.getSumOfNumbers = () => 5;

      const result = service.getSumOfBasicConstants();
      expect(result).toEqual(5);
    });
  });
});

describe('SimpleWithMocksService - Spies', () => {
  let service: SimpleWithMocksService;

  const sumOfBasicConstants = pi + e + goldenRatio;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleService
      ]
    });
    service = TestBed.inject(SimpleWithMocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSumOfBasicConstants', () => {
    it('should return undefined', () => {
      const sumOfNumbersSpy = spyOn((service as any).simpleService, 'getSumOfNumbers').and.returnValue(999);
      const result = service.getSumOfBasicConstants();

      expect(result).toEqual(999);
      expect(sumOfNumbersSpy).toHaveBeenCalled();
      expect(sumOfNumbersSpy).toHaveBeenCalledWith(pi, e, goldenRatio);
    });

    it('should return undefined', () => {
      const sumOfNumbersSpy = spyOn((service as any).simpleService, 'getSumOfNumbers').and.callThrough();

      const result = service.getSumOfBasicConstants();
      expect(result).toEqual(sumOfBasicConstants);
      expect(sumOfNumbersSpy).toHaveBeenCalled();
      expect(sumOfNumbersSpy).toHaveBeenCalledWith(pi, e, goldenRatio);
    });
  });

  // Вариант с beforeEach и afterEach

  describe('getSumOfBasicConstants - beforeEach/afterEach', () => {
    let sumOfNumbersSpy;

    beforeAll(() => {
      // console.log('Вызывается один раз перед запуском тестов внутри describe');
    });

    beforeEach(() => {
      // console.log('Вызывается перед каждым тестом внутри describe');
    });

    it('should return undefined', () => {
      sumOfNumbersSpy = spyOn((service as any).simpleService, 'getSumOfNumbers').and.returnValue(999);
      const result = service.getSumOfBasicConstants();

      expect(result).toEqual(999);
      expect(sumOfNumbersSpy).toHaveBeenCalled();
      expect(sumOfNumbersSpy).toHaveBeenCalledWith(pi, e, goldenRatio);
    });

    it('should return undefined', () => {
      sumOfNumbersSpy = spyOn((service as any).simpleService, 'getSumOfNumbers').and.callThrough();

      const result = service.getSumOfBasicConstants();
      expect(result).toEqual(sumOfBasicConstants);
    });

    afterEach(() => {
      expect(sumOfNumbersSpy).toHaveBeenCalled();
      expect(sumOfNumbersSpy).toHaveBeenCalledWith(pi, e, goldenRatio);
    });

    afterAll(() => {
      // console.log('Вызывается уже после всех тестов');
    });
  });
});
