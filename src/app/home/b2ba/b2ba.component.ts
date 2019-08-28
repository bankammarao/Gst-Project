import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b2ba',
  templateUrl: './b2ba.component.html',
  styleUrls: ['./b2ba.component.scss']
})
export class B2baComponent implements OnInit {



  constructor(private dataservice: DataService,private routerNavigate:Router) { }



  ngOnInit() {

    this.getb2baInvoice();

  }

  b2baList: any;


  array: any = [];

  inum: any;



  getb2baInvoice() {



    this.dataservice.getb2ba().subscribe(data => {




      this.b2baList =
        data

      this.array.push(this.b2baList)



      console.log('b2ba :', this.array)





    })

  

  }

back(){
  this.routerNavigate.navigate(['gstr1']); 
}
  addb2ba(){
    this.routerNavigate.navigate(['addb2ba']); 
  }
}
