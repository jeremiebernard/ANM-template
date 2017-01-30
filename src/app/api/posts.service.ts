import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  fetchPosts(): Observable<any> {
    return this.http.get('/api/posts').map(response => response.json());
  }

  fetchPostById(id: number): Observable<any> {
    return this.http.get(`/api/posts/${id}`).map(response => response.json());
  }

}
