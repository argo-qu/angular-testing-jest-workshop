import {Injectable} from '@angular/core';
import {SimpleService} from '../simple/simple.service';

export const pi = 3.14159;
export const e = 2.71828;
export const goldenRatio = 1.61803;

@Injectable({
  providedIn: 'root',
})
export class SimpleWithMocksService {

  constructor(private simpleService: SimpleService) {
  }

  getSumOfBasicConstants(): number {
    return this.simpleService.getSumOfNumbers(pi, e, goldenRatio);
  }

}
