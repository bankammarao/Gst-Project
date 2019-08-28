import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-b2cs',
  templateUrl: './b2cs.component.html',
  styleUrls: ['./b2cs.component.scss']
})
export class B2csComponent implements OnInit{

  getb2csdata:any = [];

  getb2csdataArr: any=[];







  constructor(
    private dataservice: DataService,private routerNavigate:Router ) { }



  ngOnInit() {

    this.getB2cs();

  }



  getB2cs() {

    this.dataservice.getb2cs().subscribe(data => {

      this.getb2csdata = data;
     this.getb2csdataArr=this.getb2csdata.b2cs
      //this.getb2csdataArr.push(this.getb2csdata)


     // console.log('getb2csdata', this.getb2csdata);
      console.log('getb2csdata', this.getb2csdata);

      //console.log('getb2csdataArr',this.getb2csdataArr);



    })

  }
  addb2cs(){
    this.routerNavigate.navigate(['addb2cs']);
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
}
