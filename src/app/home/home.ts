import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {

  isLoggedIn = false;

  accessMessage = '';

  role = '';



  ngOnInit(){

    if(localStorage.getItem("isLoggedIn") === "true"){

      this.isLoggedIn = true;

    }

    this.role = localStorage.getItem("role") || '';

  }



  checkAccess(){

    if(!this.isLoggedIn){

      this.accessMessage =
      "Please Login/Register To Access Features";

    }

  }



  logoutUser(){

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("role");

    localStorage.removeItem("name");

    localStorage.removeItem("email");

    window.location.href="/";

  }

}