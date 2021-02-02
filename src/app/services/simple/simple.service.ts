import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  getSumOfNumbers(...numbers: number[]): number {
    return numbers.reduce( (sum, num) => sum + num, 0);
  }

}
