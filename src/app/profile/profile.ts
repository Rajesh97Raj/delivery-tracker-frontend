import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})

export class Profile {

  user={

    name:'',

    email:'',

    role:''

  };



  ngOnInit(){

    this.user.name=
      localStorage.getItem("name") || '';

    this.user.email=
      localStorage.getItem("email") || '';

    this.user.role=
      localStorage.getItem("role") || '';

  }

}