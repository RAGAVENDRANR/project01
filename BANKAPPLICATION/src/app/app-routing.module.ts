import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NopageComponent } from './nopage/nopage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {path:'',redirectTo:"/homepage",pathMatch:"full"},                 // for defauld homepage opening on first application lodaing
  {path:"homepage",component:HomepageComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"signuppage",component:SignuppageComponent},
  {path:"aboutpage",component:AboutpageComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'header',component:HeaderComponent},
  {path:"nopage",component:NopageComponent},           
  {path:'**',component:NopageComponent}                   //Wildcard routing which leads to nopage in worng urlnavigation
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
