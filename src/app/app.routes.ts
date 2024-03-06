import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from './service/service.component';
export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'service', component:ServiceComponent},
    {path:'contact', component:ContactComponent},
    {path:'', redirectTo:"/home", pathMatch:'full'}
];
