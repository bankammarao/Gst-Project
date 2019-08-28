import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b2cl',
  templateUrl: './b2cl.component.html',
  styleUrls: ['./b2cl.component.scss']
})
export class B2clComponent implements OnInit {


  getb2cldata: any;

  // getb2cldataArr:any = [];

  constructor(
    private dataservice: DataService, private routerNavigate: Router) { }



  ngOnInit() {

    this.getB2cl();

  }



  getB2cl() {

    this.dataservice.getb2cl().subscribe(data => {

      this.getb2cldata = data;

      //this.getb2cldataArr.push(this.getb2cldata)


      console.log('getb2cldata', this.getb2cldata);

      //  console.log('getb2cldataArr', this.getb2cldataArr);



    })

  }
  back(){
    this.routerNavigate.navigate(['gstr1']); 
  }
  addb2cl() {
    this.routerNavigate.navigate(['addb2cl']);
  }
}





