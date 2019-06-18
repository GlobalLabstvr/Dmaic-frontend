import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  
   constructor(public authService: AuthService, private router:Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
     return;
  }
    this.authService.login(form.value.email, form.value.password);
    
 }

 ngOnInit(){
   
 }
 
 }

