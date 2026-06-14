import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})

export class Payment {

  cardNumber='';

  cardHolder='';

  expiry='';

  cvv='';



  makePayment(){

    alert("Payment Successful");

  }

}