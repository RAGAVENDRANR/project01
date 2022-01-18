import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginform!: FormGroup;
  invalidLogin:boolean =false
  login: any;
  message: any;
    constructor(  private formBuilder:FormBuilder,
                  private router:Router
                  ) { }

  ngOnInit(){
    this.loginform =this.formBuilder.group({
      userid:['',Validators.compose([Validators.required])],
      pwd:['',Validators.required]
    });
    
  }
  onsubmit(){
    console.log(this.loginform.value);
    this.router.navigate(['/sidenav/homepage'])
    this.loginform.reset()
  }
  register(){
    console.log("register button is called");
    this.router.navigate(["signuppage"])

  }
}
