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
  cre ='INVALID CREDENTATILES';
  userid: any;
  pwd: any;
  show=false;
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
    if(this.loginform.controls['userid'].value == 'user', this.loginform.controls['pwd'].value == '12345' ){
      this.router.navigate(['sidenav'])
      this.cre == ''
      this.loginform.reset()
      this.show=false
    }else {
      console.log("login credentiatiles is invalid")
      this.cre == "INVALID CREDENTATILES"
      this.loginform.reset()
      this.show=true
    }
  }
  register(){
    console.log("register button is called");
    this.router.navigate(["signuppage"])
  }
}