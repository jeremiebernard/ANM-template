import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IApiService } from './IApiService';

@Injectable()
export class PostsService extends IApiService {
  baseUrl: string;

  constructor(private http: Http) {
    super();
  }

  fetchPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`).map(response => response.json());
  }

  fetchPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`).map(response => response.json());
  }

}
