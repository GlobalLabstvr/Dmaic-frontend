import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs/typings/public-api';
import { Dmaic } from '../dmaic/dmaic';
import { DmaicService } from '../dmaic/dmaic.service';
import { User } from '../shared/model/user.model';
import { AuthService } from '../shared/auth/auth.service';


@Component({
    selector:'app-dmaicsheet',
    templateUrl: './dmaicsheet.component.html',
    styleUrls: ['./dmaicsheet.component.css']
    })

export class DmaicSheetComponent implements OnInit {
  public dmaic: Dmaic = {
    users : {email: 'banu@gmail.com'},
    define: 'define',
    measure: {current:10, target:100},
    analyse: 'analyse',
    implementation: 'impl',
    control:'ctrl'
  };
  selectedIndex: any;
  private users : User[]=[];
  
  constructor(private dmaicsheetService: DmaicService, private authService:AuthService, private route: ActivatedRoute){}

  ngOnInit(){
      let selectedIndex = this.route.snapshot.paramMap.get("id");
      if(selectedIndex!=='new'){
        this.dmaic = this.dmaicsheetService.getDmaic(selectedIndex);
      }
      this.authService.getUserdata()
   .subscribe(result => {
     this.users = result;
     this.authService.setResult(this.users);
     console.log("1::"+JSON.stringify(this.users));
   });
      
  }

  save(){
    console.log('dmaic:'+JSON.stringify(this.dmaic));
    console.log('userdata:'+JSON.stringify(this.users));
    this.dmaicsheetService.save(this.dmaic)
    .subscribe(data => {
      this.dmaic = data;
      this.authService.setResult(this.users);

      console.log('saved:'+JSON.stringify(data));
      console.log('saved:'+JSON.stringify(this.users));
    });
  }
   
}