import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private routerNavigate:Router ) { }
  
  
  
  ngOnInit() {
  
 
  
  }

  gstr1(){
    this.routerNavigate.navigate(['gstr1']); 
  }
  gstr2(){
    this.routerNavigate.navigate(['gstr2']); 
  }
  gstr3b(){
    this.routerNavigate.navigate(['gstr3b']); 
  }
 
}
