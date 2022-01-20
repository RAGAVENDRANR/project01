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
  save: any;
  username=[];
  userpassword=[];
  cred: any;
  userlist: any;
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

   onsubmit(){   

        this.datalist.forEach((curData: any) =>{
          let data=curData;
          if(this.loginform.controls['userid'].value == data.email &&  this.loginform.controls['pwd'].value == data.password ){
            this.router.navigate(['sidenav'])
            this.loginform.reset()
            this.show=false
          }else
            console.log("login credentiatiles is invalid")
            this.loginform.reset()
            this.show=true
          
        })
    }
  //   this.username = this.datalist.forEach((element:any) => {
  //     console.log("hiii",element)
  //   });
  //  console.log(this.username)

    // this.userpassword = this.datalist.filter((value2: any) => ( this.datalist.password == value2.password));

  
  // getcustomerdata( _value: any ,_value2:any){
  //   this.api.getdata().subscribe((res:any)=>(this.datalist=res))
  //  this.username = this.datalist.filter((value: any) => this.datalist.email === value.email)
  //  this.userpassword =this.datalist.filter((value2: any) => this.datalist.password === value2.password);
  //  console.log("customerdata is userids"+ this.username)
  //  console.log("customerdata passwords" + this.userpassword)
  // }
}



