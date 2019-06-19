import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { map} from 'rxjs/operators';



@Injectable({ providedIn: "root" })
export class AuthService {

  private isAuthenticated = false;
  private token: string;
  public  users:User[]=[];
  private authStatusListener = new Subject<boolean>();
 
 
  constructor(private http: HttpClient,private router: Router) {}


  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  
getUserdata(){
  return this.http.get<User[]>('http://localhost:3000/api/user');
}

setResult(result: User[]){
  this.users = result;
}

  //createUser(user:User) {
   //const authData: AuthData = { firstname:firstname,lastname:lastname,phonenumber:phonenumber,email:email, password:password};
  // return this.http.post("http://localhost:3000/api/users/signup", user);
      
 // }
 createUser(user:User) {
 // const authData: AuthData = {firstName:firstName,lastname:lastName,phoneNumber:phoneNumber, email: email, password: password };
  this.http
    .post("http://localhost:3000/api/user/signup", user)
    .subscribe(() => {
      this.router.navigate(["/login"]);
    }, error => {
      this.authStatusListener.next(false);
    });
}

  
  login(email:string,password:string) {
   
     return this.http.post<{token: string}>("http://localhost:3000/api/user/login",{
       email:email,password:password
     })
         .pipe(map(result => {
           if(result && result.token){
            console.log('saved:'+JSON.stringify(result));
            }
           return result;
         }));

          
       }
  
   
}
