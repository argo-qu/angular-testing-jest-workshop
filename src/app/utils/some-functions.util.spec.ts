import {
  capitalizeArrayOfStrings,
  returnValueThroughObservable,
  returnValueWithDelay,
} from './some-functions.util';

describe('Some Functions', () => {

  // Тесты на простую и чистую функцию
  describe('capitalizeArrayOfStrings', () => {

    it('should capitalize array of strings', () => {
      const result = capitalizeArrayOfStrings(['abc', 'foo', 'bar']);
      expect(result).toEqual(['Abc', 'Foo', 'Bar']);
    });

    it('should do nothing empty array for capitalization', () => {
      const result = capitalizeArrayOfStrings([]);
      expect(result).toEqual([]);
    });

    // Кейсы с некорректными значениями всегда индивидуальны
    // например можно не делать проверок, если гарантируется использование на корректных данных
    it('should return null for any different data', () => {
      // const result = capitalizeArrayOfStrings(undefined as unknown as string[]);
      // expect(result).toEqual(null);
    });
  });

  // Тесты на асинхронную функцию
  describe('returnValueWithDelay', () => {

    const value = {foo: 'bar'};

    it('should return value with delay - simple promise handling', () => {
      return returnValueWithDelay(value, 1000).then(
        result => expect(result).toBe(value), // toBe и toEqual - разные вещи
      );
    });

    it('should return value with delay - using .resolves', () => {
      // @ts-ignore
      expect(returnValueWithDelay(value, 1000)).resolves.toBe(value);
    });

    it('should return value with delay - using .resolves', async () => {
      const result = await returnValueWithDelay(value, 1000);
      expect(result).toBe(value);
    });

  });

  // Тесты с Observable
  describe('returnValueThroughObservable', () => {
    const value = {bar: 'baz'};

    it('should return value 1 time', done => {
      returnValueThroughObservable(value, 1).subscribe(emittedValue => {
        expect(emittedValue).toBe(value);
        done();
      });
    });

    it('should return value N times', done => {
      const count = 3;
      let counter = 0;

      returnValueThroughObservable(value, 3).subscribe({
        next: emittedValue => {
          counter += 1;
          expect(emittedValue).toBe(value);
        },
        complete: () => {
          expect(counter).toEqual(count);
          done();
        },
      });
    });

  });

});
