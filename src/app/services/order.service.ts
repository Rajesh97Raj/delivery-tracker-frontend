import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: any) {

    return this.http.post(
      this.apiUrl + '/create',
      order
    );

  }

}