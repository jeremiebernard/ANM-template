import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3000/api';
   }

  fetchPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`).map(response => response.json());
  }

  fetchPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`).map(response => response.json());
  }

}
