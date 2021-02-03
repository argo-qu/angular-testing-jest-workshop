import { TestBed } from '@angular/core/testing';

import { DataFetchService } from './data-fetch.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DataDto} from '../../interfaces/data.dto';

describe('DataFetchService', () => {
  let service: DataFetchService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataFetchService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load correct data', () => {
    service.loadData().subscribe( (data: DataDto[]) => {
      expect(data).toEqual([{
        userId: 1,
        id: 1,
        title: 'Post 1',
        body: 'foo'
      }, {
        userId: 1,
        id: 2,
        title: 'Post 2',
        body: 'bar'
      }]);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush([{
      userId: 1,
      id: 1,
      title: 'Post 1',
      body: 'foo'
    }, {
      userId: 1,
      id: 2,
      title: 'Post 2',
      body: 'bar'
    }]);

  });

});
