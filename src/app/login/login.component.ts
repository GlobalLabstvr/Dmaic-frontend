import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  
   constructor(public authService: AuthService, private router:Router) {}
   loginForm = new FormGroup({
     email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(''),
   })

  onLogin() {
    if (this.loginForm.invalid) {
     return;
  }
    this.authService.login(this.loginForm.value);
    
 }

 ngOnInit(){
   
 }
 
 }

