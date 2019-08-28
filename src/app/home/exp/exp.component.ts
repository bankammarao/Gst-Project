import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit{

  constructor(private routerNavigate:Router,private dataservice: DataService) { }

  ngOnInit() {
    this.getExpdata();
  }

  ExpList:any=[];
 
  array:any = [];
 


getExpdata(){

 this.dataservice.getExp().subscribe(data => {
    
    this.ExpList = data
 //this.array.push(this.ExpList)

    console.log('Exp :',this.ExpList)

  })

}
addexp(){
  this.routerNavigate.navigate(['addexp']);
}
back(){
  this.routerNavigate.navigate(['gstr1']);    
}
}



