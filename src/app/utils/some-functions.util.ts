import {Observable, of} from 'rxjs';
import {repeat} from 'rxjs/operators';

export const capitalizeArrayOfStrings = (strings: string[]): string[] =>
  strings.map(str => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`);

export const returnValueWithDelay = (value: any, delay: number): Promise<any> =>
  new Promise(resolve => setTimeout(() => resolve(value), delay));

export const returnValueThroughObservable = (value: any, times: number): Observable<any> =>
  of(value).pipe(repeat(times));
