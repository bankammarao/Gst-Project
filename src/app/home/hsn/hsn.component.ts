import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hsn',
  templateUrl: './hsn.component.html',
  styleUrls: ['./hsn.component.scss']
})
export class HsnComponent implements OnInit {



  constructor(private routerNavigate:Router,private dataservice: DataService) { }



  ngOnInit() {

    this.getb2baInvoice();

  }

  hsnList: any;


  array: any = [];

  inum: any;

  hsnarray;

  getb2baInvoice() {



    this.dataservice.gethsn().subscribe(data => {



      this.hsnList =
        data.hsnData.data;

      //this.hsnarray= this.hsnList.hsnData

      //this.array.push(this.hsnList)



      console.log('hsn :', this.hsnList)





    })



  }
  addhsn(){
  this.routerNavigate.navigate(['addhsn']);
}

back(){
  this.routerNavigate.navigate(['gstr1']);    
}
}