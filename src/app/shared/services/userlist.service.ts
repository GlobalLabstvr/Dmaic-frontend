import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';


@Injectable({ 
  providedIn: 'root'
})


export class UserlistService {
  private subject =new Subject<any>();
  private users: User[];
  constructor(private http: HttpClient,private router: Router) {}
    
getUsers():Observable<User[]> {
  return this.http.get<User[]>('http://localhost:3000/api/user')
}











getUser(id: string) {
  return this.http.get<{ _id: string; firstName: string; lastName: string; email:string;phoneNumber:number}>(
    "http://localhost:3000/api/user" + id
  );
}



  
 /* getUserlists() {
    this.http
      .get<{ message: string; userlists: any }>(
        "http://localhost:3000/api/posts"
      )
      .pipe(map((userlist) => {
        return userlist.userlists.map(userlist => {
          return {
            firstName: userlist.firstName,
            lastName: userlist.lastName,
            id: userlist._id
          };
        });
      }))
      .subscribe(transformedUserlists => {
        this.userlists = transformedUserlists;
        this.userlistUpdated.next([...this.userlists]);
      });
  }


  getUserlistUpdateListener() {
    return this.userlistUpdated.asObservable();
  }
  

  getUserlist(id: string) {
    return this.http.get<{ _id: string; firstName: string; lastName: string }>(
      "http://localhost:3000/api/posts/" + id
    );
  }

 
  addUserlist(firstName: string, lastName: string) {
    const userlist: Userlist = {  id :null,firstName: firstName, lastName: lastName };
    this.http
      .post<{ message: string ,userlistId:string}>("http://localhost:3000/api/posts", userlist)
      .subscribe(responseData => {
        const id = responseData.userlistId;
        userlist.id = id;
        this.userlists.push(userlist);
        this.userlistUpdated.next([...this.userlists]);
        this.router.navigate(["/front"]);
      });
  }*/

}



    
  
  



