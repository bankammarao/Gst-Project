import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docissue',
  templateUrl: './docissue.component.html',
  styleUrls: ['./docissue.component.scss']
})
export class DocissueComponent implements OnInit {

  constructor(private dataservice:DataService,private routerNavigate:Router,) { }

  ngOnInit() {
    this.docissuedata();
  }
  docissueList:any;
  array;
docissuedata(){
  this.dataservice.getdocissue().subscribe(data=>{
    this.docissueList=data;
    this.array=this.docissueList.doc_issue.doc_det;
    
    console.log(this.docissueList);
  })
}
adddocissue(){
  this.routerNavigate.navigate(['adddocissue']);
}
back(){
  this.routerNavigate.navigate(['gstr1']);    
}
}

