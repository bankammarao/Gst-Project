import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-taxpayerstype',
  templateUrl: './taxpayerstype.component.html',
  styleUrls: ['./taxpayerstype.component.scss']
})
export class TaxpayerstypeComponent implements OnInit {
  isupdatedby: boolean;
  edittaxdata: any;

  constructor(private dataservice:DataService,private http:HttpClient,private fb:FormBuilder) { }
  taxForm:FormGroup;
  ngOnInit() {
   this.gettaxtype();

  this.taxForm=this.fb.group({
      'taxPayersType':[null,Validators.required],
      'email':[null,Validators.required]
  })

  }
  isupdate:any;
  adddata(){
    this.isupdate=true;
    this.isupdatedby=false;
  }
  taxtypeList=[];
  updatatax=[];
  gettaxtype(){
    this.dataservice.taxdata().subscribe(data=>{
      this.taxtypeList=data.resultData;
      console.log(this.taxtypeList);
    })
  }
  savetaxpayer(emp){
    console.log(emp);
    let senddata={};
    senddata['taxPayersType']=emp.taxPayersType;
    senddata['email']=emp.email;
    senddata['lastUpdatedBy']=sessionStorage.getItem('userId');
    this.dataservice.savetaxdata(senddata).subscribe(data=>{
    this.gettaxtype();
    })
  }
  editgettaxtype(id){
 this.dataservice.gettaxById(id).subscribe(data=>{
   this.edittaxdata=data.resultData;
   this.taxForm.setValue({
    'taxPayersType':this.edittaxdata.taxpayerstypeName,
    'email':this.edittaxdata.email
 })
   
   })
   this.isupdate=false;
   this.isupdatedby=true;
   
  }
  updateevent={};
  updatetaxpayer(updatedata){
    updatedata['id']=this.edittaxdata.id;
    updatedata['lastUpdatedBy']=sessionStorage.getItem('userId');
    console.log(updatedata);
    this.dataservice.updatetaxdata(updatedata).subscribe(data =>{
      this.updateevent=data.resultData;
      this.gettaxtype();
    })
  }




  deleteSpecialEvent(formdata) {

    let deleteobj={};
    deleteobj['id']=formdata.id;
    deleteobj['lastUpdatedBy']=sessionStorage.getItem('userId');
    deleteobj['status'] = "Inactive";
    if (formdata.status === "Active") {
      status = "Inactive"
    } else {
      status = "Active";
    }
    deleteobj['status'] = status;
    this.dataservice.daletetaxdata(deleteobj).subscribe(data => {
      this.gettaxtype();
     

    })
  }
}
