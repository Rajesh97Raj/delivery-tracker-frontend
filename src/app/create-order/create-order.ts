import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-order.html',
  styleUrls: ['./create-order.css']
})

export class CreateOrder {

  customerName='';

  productName='';

  address='';

  status='Pending';

  constructor(
    private orderService: OrderService
  ){}

  createOrder(){

    const order = {

  customerName: this.customerName,

  productName: this.productName,

  address: this.address,

  status: 'Pending'

};



    this.orderService.createOrder(order).subscribe(

      (response:any)=>{

        alert("Order Created Successfully");

      },

      (error)=>{

        alert("Failed To Create Order");

        console.log(error);

      }

    );

  }

}