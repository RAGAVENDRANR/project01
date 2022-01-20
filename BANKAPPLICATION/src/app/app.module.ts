import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { StackbarchartComponent } from './stackbarchart/stackbarchart.component';


// modules from angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import {MatMenuModule}from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';


//primeng components

import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {AccordionModule} from 'primeng/accordion'; 
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {TooltipModule} from 'primeng/tooltip';
import {DockModule} from 'primeng/dock';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import {InputMaskModule} from 'primeng/inputmask';
import {BadgeModule} from 'primeng/badge';
import {GMapModule} from 'primeng/gmap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
    NopageComponent,
    AboutpageComponent,
    MainpageComponent,
    HeaderComponent,
    SidenavComponent,
    DonutchartComponent,
    StackbarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatRadioModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,

    //modules from prime ng
    TabViewModule,
    AccordionModule,
    ToolbarModule,
    MenuModule,
    ButtonModule,
    RatingModule,
    TooltipModule,
    DockModule,
    CardModule,
    ToastModule,
    MenubarModule,
    InputMaskModule,
    BadgeModule,
    GMapModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
