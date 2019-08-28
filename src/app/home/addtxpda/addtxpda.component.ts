import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject9 } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addtxpda',
  templateUrl: './addtxpda.component.html',
  styleUrls: ['./addtxpda.component.scss']
})
export class AddtxpdaComponent implements OnInit {
  getinvoice:any;
  gstinvoiceform: FormGroup;
  invoiceres: any;
  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService,
    private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstinvoiceform = this.fb.group({
      "gstin": [null, Validators.required],
      "ret_period": [null, Validators.required],
      "gt": [null, Validators.required],
      "cur_gt": [null, Validators.required],
      "ctin": [null, Validators.required],
      "inum": [null, Validators.required],
      "idt": [null, Validators.required],
      "val": [null, Validators.required],
      "pos": [null, Validators.required],
      "rchrg": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],

      "num": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "csamt": [null, Validators.required],

      "oinum": [null, Validators.required],
      "oidt": [null, Validators.required],
      "camt": [null, Validators.required],
      "samt": [null, Validators.required],
      "sply_ty": [null, Validators.required],

      "typ": [null, Validators.required],
      "omon": [null, Validators.required],

      "expt_amt": [null, Validators.required],
      "nil_amt": [null, Validators.required],
      "ngsup_amt": [null, Validators.required],


      "exp_typ1": [null, Validators.required],
      "inumexp": [null, Validators.required],
      "idtexp": [null, Validators.required],
      "valexp": [null, Validators.required],
      "sbpcode": [null, Validators.required],
      "sbnum": [null, Validators.required],
      "sbdt": [null, Validators.required],
      "rtexp": [null, Validators.required],
      "txvalexp": [null, Validators.required],
      "iamtexp": [null, Validators.required],
      "csamtexp": [null, Validators.required],


      "omontxpda": [null, Validators.required],
      "postxpda": [null, Validators.required],
      "sply_tytxpda": [null, Validators.required],
      "diff_percenttxpda": [null, Validators.required],
      "rttxpda": [null, Validators.required],
      "ad_amttxpda": [null, Validators.required],
      "iamttxpda": [null, Validators.required],
      "csamttxpda": [null, Validators.required],

  })
  }

  saveGSTInvoiceobj() {

    let fullObject: fullobject9 =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,
      
     txpda: [
        {
          omon: this.gstinvoiceform.get("omontxpda").value,
          pos: this.gstinvoiceform.get("postxpda").value,
          sply_ty: this.gstinvoiceform.get("sply_tytxpda").value,
          diff_percent: this.gstinvoiceform.get("diff_percenttxpda").value,
          itms: [
            {
              rt: this.gstinvoiceform.get("rttxpda").value,
              ad_amt: this.gstinvoiceform.get("ad_amttxpda").value,
              iamt: this.gstinvoiceform.get("iamttxpda").value,
              csamt: this.gstinvoiceform.get("csamttxpda").value,
            }
          ]
        }
      ],



    }


    console.log(fullObject);

    this.getinvoice = fullObject
    sessionStorage.setItem('gstInNum', this.getinvoice.gstin);
    sessionStorage.setItem('returnPeriod', this.getinvoice.ret_period);

    this.index.saveGstInvoice(fullObject).subscribe(response => {
      this.invoiceres = response;



      console.log(this.invoiceres);


      {
        swal(this.invoiceres.ref_Id, "", "success");
      }

    })

  
  }

  backClicked(){
    this.router.navigate(['txpda']); 
  }
}
