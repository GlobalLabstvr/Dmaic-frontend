import { Component, OnInit } from '@angular/core';
import { DmaicService } from './dmaic.service';
import { HttpClient } from '@angular/common/http';
import { Dmaic } from './dmaic';

@Component({
  selector: 'app-dmaic',
  templateUrl: './dmaic.component.html',
  styleUrls: ['./dmaic.component.css']
})
export class DmaicComponent implements OnInit {
  public dmaics:Dmaic[] = [];
  constructor(private dmaicService: DmaicService,private http:HttpClient) { }

  ngOnInit() {
    this.dmaicService.getDetails()
    .subscribe(data => {
      this.dmaics = data;
      this.dmaicService.setData(this.dmaics);
      console.log("1::"+JSON.stringify(this.dmaics));
    });
  }

}
