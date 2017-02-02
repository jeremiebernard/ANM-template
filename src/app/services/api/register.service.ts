import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IApiService } from './IApiService';

@Injectable()
export class RegisterService extends IApiService {
  baseUrl: string;

  constructor(private http: Http) {
    super();
  }

  register(user: Object): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.baseUrl}/register`, user, options).map(response => response.json());
  }

}
