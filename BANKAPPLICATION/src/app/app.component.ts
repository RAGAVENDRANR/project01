import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BANKAPPLICATION';
  showFiller=false
  loginform!: FormGroup;
  invalidLogin:boolean =false
  login: any;
  message: any;
    constructor(  private formBuilder:FormBuilder,
                  private router:Router,
                  private apiService:ApiService) { }

  ngOnInit(){
    
  }
  onsubmit(){
    console.log(this.loginform.value);
    this.showFiller=!this.showFiller;
    this.router.navigate(['/sidenav']);
    this.loginform.reset()
  }
 
}
