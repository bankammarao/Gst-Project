import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-txpd',
  templateUrl: './txpd.component.html',
  styleUrls: ['./txpd.component.scss']
})
export class TxpdComponent implements OnInit {

  constructor(private routerNavigate:Router,private dataservice: DataService) { }
 
 ngOnInit() {
   this.gettxpdata();
 }
 
 TxpList:any=[];
 
 array:any = [];
 
 
 
 gettxpdata(){
 
 this.dataservice.getTxp().subscribe(data => {
   
   this.TxpList = data
 
   console.log('txp :',this.TxpList)
 
 })
 
 }
 
 addtxpd(){
  this.routerNavigate.navigate(['addtxpd']);
 }
 back(){
  this.routerNavigate.navigate(['gstr1']);    
}
 }