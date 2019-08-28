import { Component, OnInit } from '@angular/core';
import { HttpClient }
  from '@angular/common/http';

import {
  FormBuilder,
  Validators, FormGroup
}
  from '@angular/forms';

import { DataService }
  from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cdnr',
  templateUrl: './cdnr.component.html',
  styleUrls: ['./cdnr.component.scss']
})
export class CdnrComponent implements OnInit {

  getcdnr: any = [];

  //getcdnrdataArr: any=[];

  cdnr: any;

  constructor(private http: HttpClient, private fb: FormBuilder, private dataservice: DataService,private routerNavigate:Router ) { }



  ngOnInit() {

    this.getCdnr();

  }



  getCdnr() {

    this.dataservice.getcdnr().subscribe(data => {

      this.cdnr = data;

      //this.getcdnr.push(this.cdnr)


      console.log('getcdnr', this.cdnr);




    })

  }
  addcdnr(){
    this.routerNavigate.navigate(['addcdnr']);
  }
  back(){
    this.routerNavigate.navigate(['gstr1']);    
  }
}
