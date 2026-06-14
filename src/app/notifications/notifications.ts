
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  notifications=[

    'Order #101 Delivered Successfully',

    'Payment Completed',

    'Your Order Has Been Shipped',

    'Delivery Agent Assigned'

  ];

}