import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-txpda',
  templateUrl: './txpda.component.html',
  styleUrls: ['./txpda.component.scss']
})
export class TxpdaComponent implements OnInit {

  constructor(private dataservice:DataService,private routerNavigate:Router,) { }

  ngOnInit() {
   this.gettxpdadata();
  }
  array:any;
  taxpdaList:any;
gettxpdadata(){
  this.dataservice.gettxpda().subscribe(data=>{
    this.taxpdaList=data;
    this.array=this.taxpdaList.txpda
    console.log(this.taxpdaList);
  })
}
addtxpda(){
  this.routerNavigate.navigate(['addtxpda']);
}
back(){
  this.routerNavigate.navigate(['gstr1']);    
}
}
