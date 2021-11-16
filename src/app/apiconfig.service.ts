import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiconfigService {
  configUrl = 'http://3.108.44.11:8080/broomstick/';

  constructor(private http: HttpClient) { }

getConfig():Observable<User[]> {
  return this.http.get<User[]>(this.configUrl);

}

}
