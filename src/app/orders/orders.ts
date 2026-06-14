import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.html',
  styleUrls: ['./orders.css']
})

export class Orders {

  orders:any[]=[];

  constructor(
    private http:HttpClient
  ){

    this.loadOrders();

  }



  loadOrders(){

    this.http.get<any[]>(
      'http://localhost:8080/orders/all'
    ).subscribe(

      (response)=>{

        this.orders=response;

      }

    );

  }

}