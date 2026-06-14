
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  email='';

  password='';



  constructor(
    private userService:UserService,
    private router:Router
  ){}




loginUser(){

  const user={

    email:this.email,
    password:this.password

  };



  this.userService.loginUser(user).subscribe(

    (response:any)=>{

      if(response){

        localStorage.setItem("isLoggedIn","true");

        localStorage.setItem("role",response.role);

        localStorage.setItem("email",response.email);

        localStorage.setItem("name",response.name);

        window.location.href="/";

      }
      else{

        alert("Invalid Credentials");

      }

    }

  );

}
}