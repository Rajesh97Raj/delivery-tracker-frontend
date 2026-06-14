import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class Register {

  name='';

  email='';

  password='';

  confirmPassword='';

  role='CUSTOMER';

  errorMessage='';

  passwordMessage='';

  showPassword=false;

  showConfirmPassword=false;



  constructor(
    private userService:UserService,
    private router:Router
  ){}



  checkPasswordStrength(){

    const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;



    if(strongPassword.test(this.password)){

      this.passwordMessage =
      'Strong Password ✅';

    }
    else{

      this.passwordMessage =
      'Password must contain Uppercase, Lowercase, Number and 8+ characters';

    }

  }



  registerUser(){

    if(this.password !== this.confirmPassword){

      this.errorMessage =
      'Passwords do not match';

      return;

    }



    const user={

      name:this.name,

      email:this.email,

      password:this.password,

      role:this.role

    };



    this.userService.registerUser(user).subscribe(

      (response:any)=>{

        this.errorMessage='';

        localStorage.setItem("isLoggedIn","true");

        alert("Registration Success");

        window.location.href="/";

      },

      (error)=>{

        this.errorMessage =
        "Email already exists. Please use another email.";

      }

    );

  }

}