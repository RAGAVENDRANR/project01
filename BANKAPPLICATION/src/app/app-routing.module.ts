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
import { DonutchartComponent } from './donutchart/donutchart.component';
import { StackbarchartComponent } from './stackbarchart/stackbarchart.component';

const routes: Routes = [
  {path:'',redirectTo:"/loginpage",pathMatch:"full"},                 // for defauld homepage opening on first application lodaing
  {path:"root",component:AppComponent},
  // {path:"homepage",component:HomepageComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"signuppage",component:SignuppageComponent},
  // {path:"aboutpage",component:AboutpageComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'donut',component:DonutchartComponent},
  {path:'stacked',component:StackbarchartComponent},
  {path:'sidenav',component:SidenavComponent,
  children: [
    {path: 'homepage',component: HomepageComponent},
    {path: 'aboutpage',component: AboutpageComponent},
    {path:"header",component:HeaderComponent,},
    {path:'donut',component:DonutchartComponent},
    {path:'stacked',component:StackbarchartComponent}
  ],
},
  // {path:'header',component:HeaderComponent},
  {path:"nopage",component:NopageComponent},
  {path:'**',component:NopageComponent}                   //Wildcard routing which leads to nopage in worng urlnavigation
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AppComponent,LoginpageComponent,
  SignuppageComponent,HomepageComponent,AboutpageComponent,HeaderComponent,NopageComponent,DonutchartComponent

]
