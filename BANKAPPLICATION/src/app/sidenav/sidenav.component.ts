import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  route:any;

  items!: MenuItem[];
  
  constructor(private router:Router,
             private messageService: MessageService, 
            private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.router.navigate(['sidenav/homepage'])
  }
  showhomepage(){
    this.router.navigate(['sidenav/homepage'])
  }
  showaboutpage(){
    this.router.navigate(['sidenav/aboutpage'])
  }
  logoutfunction(){
    console.log("reroute function called"),
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   
  }
  onReject(){ console.log("Rejected for navigation")
  this.messageService.clear();}
  onConfirm(){
    this.router.navigate(['loginpage'])
  }
  profile(){
    alert("profile is clicked")
  }
  notifi(){
    alert("No Notification yet...")
  }
}