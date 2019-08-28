import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdnur',
  templateUrl: './cdnur.component.html',
  styleUrls: ['./cdnur.component.scss']
})
export class CdnurComponent implements OnInit {

  constructor(private dataservice: DataService,private routerNavigate:Router ) { }

  ngOnInit() {
    this.getcdnurdata();
  }
  cdnurList:any=[];
  getcdnurdata(){
    this.dataservice.getcdnur().subscribe(data=>{
      this.cdnurList=data;
      console.log(this.cdnurList);
    })
  }
  addcdnur(){
    this.routerNavigate.navigate(['addcdnur']);
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
}
