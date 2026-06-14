
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }



  loginUser(user:any){

    return this.http.post(this.baseUrl + '/login', user);

  }



  registerUser(user:any){

    return this.http.post(this.baseUrl + '/register', user);

  }

}