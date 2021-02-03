import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataDto} from '../../interfaces/data.dto';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient) { }

  loadData(): Observable<DataDto[]> {
    return this.http.get<DataDto[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
