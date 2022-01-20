import { ApiService } from './../api.service';
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
  datalist: any=[];
    constructor(  private formBuilder:FormBuilder,
                  private router:Router,
                  private api:ApiService,
                  ) { }

  ngOnInit(){
    this.loginform =this.formBuilder.group({
      userid:['',Validators.required],
      pwd:['',Validators.required]
    }); 
    this.api.getdata().subscribe((res:any)=>{this.datalist = res;
      console.log("DATALIST FETCHING ON BUTTON CLICK" + this.datalist)})
    }


  register(){
    console.log("register button is called");
    this.router.navigate(["signuppage"])
  }

  // onsubmit(){

  //   for (let i=0; i<= this.datalist.length; i++){
  //     if (this.loginform.controls['userid'].value == this.datalist[i].accountnumber){
  //       console.log("first if" + this.loginform.controls['userid'].value)
  //       console.log("first if" + this.datalist[i].accountnumber)
  //       if (this.loginform.controls['pwd'].value == this.datalist[i].password){
  //         this.router.navigate(['sidenav']);
  //          this.loginform.reset()
  //         this.show=false
  //         console.log("first if" + this.loginform.controls['userid'].value)
  //         console.log("first if" + this.datalist[i].accountnumber)
  //       }
  //     }
  //     else {
  //       this.show=true
  //       console.log("invalid password")
  //       this.loginform.reset();
  //       // setTimeout(()=>window.location.reload(),100)
  //     } 
  //   }
  // }

  onsubmit(){
    this.datalist.forEach((res: any) => {
console.log('username', this.loginform.controls['userid'].value,res.accountnumber)
console.log('password', this.loginform.controls['pwd'].value,res.password)

      if(this.loginform.controls['userid'].value == res.accountnumber ){
        if(this.loginform.controls['pwd'].value == res.password){
          this.router.navigate(['sidenav']);
                  //  this.loginform.reset()
                   this.show=false;
        }
      }
      else{
        this.show=true
      }
    });
  }
}



