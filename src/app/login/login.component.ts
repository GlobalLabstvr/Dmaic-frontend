import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //email: string = 'sujeemithun@gmail.com'
  //constructor(private authService: AuthService) {}

  //ngOnInit(){
    //console.log(this.authService.email());
  //}
  
  submitted = false;
   constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}
   
    loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(''),
  });
   
   ngOnInit(){
    
  }

  get f() { 
    return this.loginForm.controls; 
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
     return;
  }
    this.authService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      result=> {
        console.log(result);
        this.router.navigate(['/dmaic']);
      }
      
      
    );
    
 }

 
 
 }

