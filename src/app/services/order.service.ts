import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = https://delivery-tracker-production-33c0.up.railway.app

  constructor(private http: HttpClient) {}

  createOrder(order: any) {

    return this.http.post(
      this.apiUrl + '/create',
      order
    );

  }

}
