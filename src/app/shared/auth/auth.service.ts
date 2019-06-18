import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from '../../shared/auth/auth-data';
import { Login} from '../../shared/model/login-data';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';
import { UserListComponent } from 'src/app/user-list/user-list.component';



@Injectable({ providedIn: "root" })
export class AuthService {
  userobj : User[];
  private isAuthenticated = false;
  private token: string;
  public  users:User[]=[];
  private authStatusListener = new Subject<boolean>();
  private userUpdated = new Subject<User[]>();
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
      this.router.navigate(["/"]);
    }, error => {
      this.authStatusListener.next(false);
    });
}

  login(email: string, password: string) {
   const login: Login = {email: email, password: password};
   this.http.post<{token: string}>("http://localhost:3000/api/user/login", login)
        .subscribe(response => {
      const token = response.token;
       this.token = token;
       this.userobj = this.users;
       if (token) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(['/dmaic']);
      }
  })
  }
}
