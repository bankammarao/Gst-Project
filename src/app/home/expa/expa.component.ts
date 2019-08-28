import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expa',
  templateUrl: './expa.component.html',
  styleUrls: ['./expa.component.scss']
})
export class ExpaComponent implements OnInit  {

  constructor(private routerNavigate:Router,private dataservice: DataService) { }
 
 ngOnInit() {
   this.getExpadata();
 }
 
 ExpaList:any=[];
 
 array:any = [];
 
 
 
 getExpadata(){
 
 this.dataservice.getExpa().subscribe(data => {
   
   this.ExpaList = data
 
   console.log('Expa :',this.ExpaList)
 
 })
 
 }
 addexpa(){
  this.routerNavigate.navigate(['addexpa']);
}
back(){
  this.routerNavigate.navigate(['gstr1']);    
}
 }
 