
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl ='https://delivery-tracker-production-33c0.up.railway.app/user';

  constructor(private http: HttpClient) { }



  loginUser(user:any){

    return this.http.post(this.apiUrl + '/login', user);

  }



  registerUser(user:any){

    return this.http.post(this.apiUrl + '/register', user);

  }

}
