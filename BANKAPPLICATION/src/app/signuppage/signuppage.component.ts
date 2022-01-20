import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
  firstFormGroup!: FormGroup;
  data: any;
 

    constructor(  private formBuilder:FormBuilder,
      private api:ApiService,
      private router:Router) { }

  ngOnInit(){

    this.firstFormGroup = this.formBuilder.group({

      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailid:['',Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      mobilenumber:['',Validators.required],
      password:['',Validators.required],
  
      accountnumber: ['', Validators.required],
      atmcardnumber: ['', Validators.required],
      expirydate:['',Validators.required],
      ifsccode:['',Validators.required],
      branch:['',Validators.required]
    });
  }
  onsubmit(){
    console.log(this.firstFormGroup.value)
    let save = this.firstFormGroup.value
    this.api.postdata(save).subscribe(ref=>{this.data=ref,
    console.log("data is posted to database"+ this.data)})
    this.firstFormGroup.reset();
    alert('Signup Success and redirecting to Loginpage...')
    setTimeout(() => {
      this.router.navigate(['/loginpage'])
  }, 3000);
   
  }
  reset(){
    this.firstFormGroup.reset() 
  }
}
