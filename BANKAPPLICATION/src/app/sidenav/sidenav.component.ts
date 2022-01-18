import { AboutpageComponent } from './../aboutpage/aboutpage.component';
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

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }
  showhomepage(){
    this.router.navigate(['homepage'],{relativeTo:this.route})
  }
  showaboutpage(){
    this.router.navigate(['aboutpage'],{relativeTo:this.route})
  }
  logoutfunction(){
    console.log("reroute function called"),
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   
  }
  onReject(){ console.log("Rejected to navigation")
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

