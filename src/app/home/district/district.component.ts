import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  isCreated: boolean;
  isCreatedby: boolean;
  getDetailsById: any;
  districtById: any;

  constructor(private dataservice:DataService,private http:HttpClient,private fb:FormBuilder) { }

  
  districtform:FormGroup;
  ngOnInit() {
  this.districtform=this.fb.group({
      'districtName':[null,Validators.required],
      'email':[null,Validators.required]
  })
  this.getdistrict();
}


  districtList=[];
  updatatax=[];

  getdistrict(){
    this.dataservice.districtdata().subscribe(data=>{
      this.districtList=data.resultData;
      console.log(this.districtList);
    })
  }

  savedistrictdata(emp){
    console.log(emp);
    let senddata={};
    senddata['districtName']=emp.districtName;
    senddata['email']=emp.email;
    senddata['lastUpdatedBy']=sessionStorage.getItem('userId');
    this.dataservice.savedistrictdata1(senddata).subscribe(data=>{
    this.getdistrict();
    })
  }

 addbutton(){
   this.isCreated=true;
   this.isCreatedby=false;
 }
  editdistrict(id){
    console.log(id);
    this.isCreatedby=true;
    this.isCreated=false;
    this.dataservice.getdistrictbyid(id).subscribe(data => {
      this.getDetailsById = data.resultData;
      console.log(this.getDetailsById);
    this.districtform.patchValue({
      "districtName": this.getDetailsById.districtName,
      "email":this.getDetailsById.email,
      })
   
    })
  }



  updatedistrict(updatedistrict){
    updatedistrict['id'] = this.getDetailsById.id;
    updatedistrict['lastUpdatedBy'] = sessionStorage.getItem('userId');
    this.dataservice.updatedistrictdata(updatedistrict).subscribe(data => {
      this.districtById = data.resultData;
      this.getdistrict();
    })
  }

  

  deletedistrict(formdata) {

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
    this.dataservice.daletestatedata(deleteobj).subscribe(data => {
      this.getdistrict();
     

    })
  }
  







}
