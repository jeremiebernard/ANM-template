import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  baseUrl: string;

  constructor(private http: Http) { }

  fetchPosts(): Observable<any> {
    return this.http.get('/api/posts')
      .map(response => response.json());
  }

}
