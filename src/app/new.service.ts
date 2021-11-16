import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  url = "http://127.0.0.1:8000/broomstick/"
  private userUrl = 'http://localhost:8000/users';
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

}
