import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b2cla',
  templateUrl: './b2cla.component.html',
  styleUrls: ['./b2cla.component.scss']
})
export class B2claComponent implements OnInit {

  getb2cladata: any;

  b2claArr: any = [];



  constructor(private dataservice: DataService,private routerNavigate:Router ) { }



  ngOnInit() {

    this.getb2cla();

  }

  getb2cla() {

    this.dataservice.getb2cla().subscribe(data => {

      this.getb2cladata = data;

      //this.b2claArr.push(this.getb2cladata);

      console.log('getb2cladata', this.getb2cladata);

    })

  }
  addb2cla(){
    this.routerNavigate.navigate(['addb2cla']); 
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
}
