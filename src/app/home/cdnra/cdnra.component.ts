import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdnra',
  templateUrl: './cdnra.component.html',
  styleUrls: ['./cdnra.component.scss']
})
export class CdnraComponent implements OnInit  {

  getcdnr1=[];
  
  
  
  constructor(private dataservice:DataService,private routerNavigate:Router) { }
  
  cdnrArr: any=[];
  
  ngOnInit() {
  
  
  
  this.cdnrdata();
  
  }
  
  cdnrdata()
  
  {
  
  this.dataservice.getcdnra().subscribe(data=>{
  
  this.getcdnr1 =data;
  
  console.log(this.getcdnr1);
  
  })
  
  }
  addcdnra(){
    this.routerNavigate.navigate(['addcdnra']);
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
}
