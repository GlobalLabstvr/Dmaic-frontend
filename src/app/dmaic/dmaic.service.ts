import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Dmaic } from './dmaic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmaicService {

  constructor(private http: HttpClient, private router: Router) { }
  public dmaics : Dmaic[];

  getDetails():Observable<Dmaic[]>{
      return this.http.get<Dmaic[]>('http://localhost:3000/api/dmaic');
  }

    save(dmaic: Dmaic):Observable<Dmaic>{
      return this.http.post<Dmaic>('http://localhost:3000/api/dmaic',dmaic);
    }

    setData(data: Dmaic[]){
      this.dmaics = data;
    }

    getDmaicList(){
      return this.dmaics;
    }

    getDmaic(index:string){
      return this.dmaics[index];
    }

}
