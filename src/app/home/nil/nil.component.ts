import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nil',
  templateUrl: './nil.component.html',
  styleUrls: ['./nil.component.scss']
})
export class NilComponent implements OnInit  {

  getnilarr1=[];
  
  
  
  constructor(private routerNavigate:Router,private dataservice: DataService) { }
  
  ngOnInit() {
  
  this.getnil1();
  
  
  
  }
  
  getnil1() {
  
  this.dataservice.getnil().subscribe(data=>
   {
  
  this.getnilarr1=data.nil.inv;
  
  console.log(this.getnilarr1);
  
  })
  
  }
  
  addnil(){
    this.routerNavigate.navigate(['addnil']);
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
  }