import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
 
  getDetailsById: any;
  stateById: any;
  isCreated:boolean;
  isCreatedby: boolean;
  statelistData: any;

  constructor(private dataservice:DataService,private http:HttpClient,private fb:FormBuilder) { }
  stateform:FormGroup;
  ngOnInit() {
   this.getstate();

  this.stateform=this.fb.group({
      'stateName':[null,Validators.required],
      'email':[null,Validators.required]
  })

  }
  stateList=[];
  updatatax=[];
  getstate(){
    this.dataservice.statedata().subscribe(data=>{
      this.stateList=data.resultData;
      console.log(this.stateList);
    })
  }

  savestatedata(emp){
    console.log(emp);
    let senddata={};
    senddata['stateName']=emp.stateName;
    senddata['email']=emp.email;
    // senddata['status']=emp.email;
    senddata['lastUpdatedBy']=sessionStorage.getItem('userId');
    this.dataservice.savestatedata(senddata).subscribe(data=>{
    this.getstate();
    })
  }

 addbutton(){
   this.isCreated=true;
   this.isCreatedby=false;
 }


  

 
  editstate(id){
    console.log(id);
 this.dataservice.getstateById(id).subscribe(data =>{
   this.statelistData=data.resultData;
   console.log(this.statelistData);
   this.stateform.setValue({
    'stateName':this.statelistData.stateName,
    'email':this.statelistData.email
 })
 
 })
    this.isCreatedby=true;
    this.isCreated=false;
  }
  updatestate(updatedata)
{
  updatedata['id']=this.statelistData.id;
   updatedata['lastUpdatedBy']=sessionStorage.getItem('userId');
   this.dataservice.updatestatedata(updatedata).subscribe(res => {
       this.getstate();
   });
}

  deletestate(formdata) {

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
      this.getstate();
     

    })
  }
}