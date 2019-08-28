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
  selector: 'app-cdnura',
  templateUrl: './cdnura.component.html',
  styleUrls: ['./cdnura.component.scss']
})
export class CdnuraComponent implements OnInit {

  constructor(private  http: HttpClient,    private fb: FormBuilder,private routerNavigate:Router,
    private dataservice: DataService) { }

  //getcdnura: any = [];

  cdnura: any;

  ngOnInit() {

    this.getCdnura()

  }

  getCdnura() {

    this.dataservice.getcdnura().subscribe(data => {

      this.cdnura = data;

 
     // this.getcdnura.push(this.cdnura)


      console.log('getcdnura', this.cdnura);

    })

  }

addcdnura(){
  this.routerNavigate.navigate(['addcdnura']);
}
back(){
  this.routerNavigate.navigate(['gstr1']);    
}
}


