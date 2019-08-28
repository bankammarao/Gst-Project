import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-b2b',
  templateUrl: './b2b.component.html',
  styleUrls: ['./b2b.component.scss']
})
export class B2bComponent implements OnInit {


  constructor(private dataservice: DataService,private routerNavigate:Router ) { }

  ngOnInit() {
    this.getb2bInvoice();
  }

  b2bList:any;
 


getb2bInvoice() {

   this.dataservice.getB2BInvoice().subscribe(data => {

    
    this.b2bList = data


    console.log('b2b :',this.b2bList)

  })

}

back(){
  this.routerNavigate.navigate(['gstr1']);    
}
addb2b(){
  this.routerNavigate.navigate(['addb2b']); 
}
}