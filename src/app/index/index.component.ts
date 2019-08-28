import { HttpClient } from '@angular/common/http';
import { IndexService } from './services/index.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { DataService } from '../services/data.service';
declare var $: any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loginform: FormGroup;
  registerform: FormGroup;
  loginActionActive = false;
  registerdisabled:boolean=false;
  spin:boolean=false;
  recrutmentData: any;
  createdby: boolean=false;
  emailInput:any;
  res:any;
  roleNagivation: any;
  applicationid: any;
  getUserListId: any;
  Url="http://192.168.1.137:8088/recruitment/rest/user/forgotPassword/"
  abc: any;




  constructor(private authService: AuthService, private routerNavigate: Router, private fb: FormBuilder, private index: IndexService,private http:HttpClient, private dataservice: DataService) { }


  LoginAction(formData: any) {
    console.log(formData)
    if (this.authService.loginAction(formData)) {
      this.loginActionActive = true;
      this.loginform.reset();
    }
  }

  navigateToDashboard() {
   if (this.loginActionActive) {
       this.roleNagivation = sessionStorage.getItem('role')
      if (this.roleNagivation == 'User') {
        // let requestobj = {};
        // requestobj['positionId'] = localStorage.getItem('positionId');
        // requestobj['userId'] = sessionStorage.getItem('userId');
        // if (localStorage.getItem('positionId') != null && sessionStorage.getItem('userId') != null) {
        //   this.dataservice.getuserlistByIds(requestobj).subscribe(res => {
        //     this.applicationid = res;
        //     if (this.applicationid.errorMessage == "Application already exists") {
        //       swal("Already applied for this position", "Please Login...!!!!").then((value) => {
        //         this.routerNavigate.navigate(['login'])
        //         $("#loginModal").hide();
        //         localStorage.clear();
        //         sessionStorage.clear();
        //       });
        //     }
        //     if (this.applicationid.errorMessage == 'Application not exists') {
        //       this.routerNavigate.navigate(['dashboard']);
        //     }
        //   });
        // }
        // if (localStorage.getItem('positionId') == null && sessionStorage.getItem('userId') != null) {
        //   const id = sessionStorage.getItem('userId');
        //   this.dataservice.getUserListById(id).subscribe(res => {

        //     this.getUserListId = res.resultData;
        //     this.routerNavigate.navigate(['userList']);
        //     console.log(this.getUserListId);

        //   })
        // }
        this.routerNavigate.navigate(['dashboard']);
      }
       if (this.roleNagivation == 'admin') {
         this.routerNavigate.navigate(['taxtype']);
       }
    }
  }

  ngOnInit() {

    this.loginform = this.fb.group({
      'userName':[null, Validators.required],
      'password': [null, Validators.required]
    });
    this.gettaxtype();
    this.getstate();
    this.getdistrict();


    this.getRecurimentList();


    this.registerform = this.fb.group({
      'username': [null, Validators.required],
      'clientName': [null, Validators.required],
      'type': [null, Validators.required],
      'address':[null, Validators.required],
      'state': ["", [Validators.required]],
      'city': [null, Validators.required],
      'pincode': [null, Validators.required],
      'panNumber': new FormControl('', [Validators.required, Validators.pattern( /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/)]),
      'eamilAddress':new FormControl ('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'mobileNumber': [null, Validators.required],

    })
      this.authService.logindata.subscribe(data => {
      this.navigateToDashboard();
    });

 

    $(document).ready(function () {

      $('.login').click(function () {
        $("#loginModal").toggle();
      });

      $('.login').click(function () {
        $("#loginModal").show();
        $('#sign').show();
      });

      $('#sign').click(function () {
        $("#loginModal").hide();
        $('#sign').hide();
      });


      $('#signup').click(function () {
        $("#reigsterModal").toggle();
        $('#sign1').show();
      });

      $('#sign1').click(function () {
        $("#reigsterModal").hide();
        $(this).hide();
      });

      $('#openRegModal1').click(function () {
        $("#reigsterModal,#sign1").show();
        $("#loginModal,#sign").hide();
      });

      $('#openRegModal').click(function () {
        $("#reigsterModal,#sign1").hide();
        $("#loginModal,#sign").show();
      });
    });

  }
  taxtypeList=[];
  stateList=[];
  districtList=[];
  gettaxtype(){
    this.dataservice.taxdata().subscribe(data=>{
      this.taxtypeList=data.resultData;
      console.log(this.taxtypeList);
    })
  }
  getstate(){
    this.dataservice.statedata().subscribe(data=>{
      this.stateList=data.resultData;
      console.log(this.stateList);
    })
  }
  getdistrict(){
    this.dataservice.districtdata().subscribe(data=>{
      this.districtList=data.resultData;
      console.log(this.districtList);
    })
  }

  viewResult() {
    this.routerNavigate.navigate(['viewresults']);
  }

  register(formdata) {
    //console.log(formdata);
   // this.registerdisabled=true;
   // this.spin=true;

    let requestobj = {
      'role': 'user'
    }
      requestobj = { ...formdata, ...requestobj };

    return this.index.register(requestobj).subscribe(res => {
     // this.registerdisabled=false;
      //this.spin=false;
     if (res['statusCode'] == 200) {
        swal("Registered Link Sent Your Email!", "Thank you", "success");
        $("#reigsterModal").hide();
      }
      else if (res['statusCode'] == 226) {
        swal("User registration  already exists");
         }
     },
      err => {
        if (err.status == 500) {
          swal("User Registration failed due to internal server error.");
        }
    })
  }

  getRecurimentList(){
    this.index.getRecrutment().subscribe(data => {
      this.recrutmentData = data.resultData;
      console.log(this.recrutmentData);
  })

}

onClick(list) {
 
  $("#loginModal").show();
  $('#sign').show();
  const id = localStorage.setItem('positionId', list.id);
  const applno = localStorage.setItem("applno", list.positionName);
  console.log(list);

}

forget()
{
  this.createdby= true;
}


forgotPassword123() {

  alert();
  this.http.get(this.Url+this.emailInput).subscribe((data)=>{
  this.res=data;
  if(this.res.responseMessage == "Password Sent to Your Email."){
  swal(this.res.responseMessage, "","success");
  }
  });
  this.createdby = false;
}


backToLogin()
{
  this.createdby = false;
}

LoginPage() {
    this.routerNavigate.navigate(['loginpageaction']);
}




}
