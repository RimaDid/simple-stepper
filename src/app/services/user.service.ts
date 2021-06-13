import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
interface URL {
  [key:string] : (param:string)=> string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * to make this cont dynamic we can use injecte token instead
   */
  readonly baseRef = 'https://api.github.com';

  private urls:URL = {
    users: (userName:string)=> `/users/${userName}`
  }

  constructor(private http: HttpClient) { }

  getUserByUserName(userName: string): Observable<any>{
    if(!userName) {
      return throwError(`Bad request: you cannot use empty string as a username!`);
    }
    return this.http.get(this.baseRef + this.urls.users(userName));
  }
}
