import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {CanActivate, Routes, RouterModule} from '@angular/router';
import { HttpService} from './services/http.service';
import { LoginService} from './services/login.service';
import { UserService} from './services/user.service';
import { FormsModule }   from '@angular/forms';
 
import { AppComponent }   from './app-page/app.component';
import { AboutComponent }   from './about-page/about.component';
import { LoginComponent }   from './login-page/login.component';
import { MainComponent }   from './main-page/main.component';
import { PhoneComponent }   from './phone-page/phone.component';
import { ModalComponent }   from './modal-page/modal.component';

import { HttpClientModule }   from '@angular/common/http';

import {LoginRouteGuard} from './guard';
import {NavComponent} from './nav-page/nav.component'


 
// определение маршрутов
const appRoutes: Routes =[
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent, canActivate: [LoginRouteGuard]},
    { path: 'main', component: MainComponent, canActivate: [LoginRouteGuard]}
];
 
@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [
        AppComponent,
        AboutComponent,
        NavComponent,
        LoginComponent,
        MainComponent,
        PhoneComponent,
        ModalComponent
    ],
    providers:    [LoginRouteGuard, HttpService, LoginService, UserService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }