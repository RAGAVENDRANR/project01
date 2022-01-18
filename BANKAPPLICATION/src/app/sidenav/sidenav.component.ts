import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  route:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showhomepage(){
    this.router.navigate(['homepage'],{relativeTo:this.route})
  }
  showaboutpage(){
    this.router.navigate(['aboutpage'],{relativeTo:this.route})
  }
}
