import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-tracking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-tracking.html',
  styleUrls: ['./customer-tracking.css']
})

export class CustomerTracking {

  orderId='';

  trackingStatus='';



  trackOrder(){

    this.trackingStatus='Your Order Is Out For Delivery';

  }

}