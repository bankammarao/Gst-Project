import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject8 } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addexpa',
  templateUrl: './addexpa.component.html',
  styleUrls: ['./addexpa.component.scss']
})
export class AddexpaComponent implements OnInit {
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


      "exp_typexpa": [null, Validators.required],
      "oinumexpa": [null, Validators.required],
      "oidtexpa": [null, Validators.required],
      "inumexpa": [null, Validators.required],
      "valexpa": [null, Validators.required],
      "sbpcodeexpa": [null, Validators.required],
      "sbnumexpa": [null, Validators.required],
      "sbdtexpa": [null, Validators.required],
      "rtexpa": [null, Validators.required],
      "txvalexpa": [null, Validators.required],
      "iamtexpa": [null, Validators.required],
      "csamtexpa": [null, Validators.required],
      "idtexpa": [null, Validators.required],


  })
  }

  saveGSTInvoiceobj() {

    let fullObject: fullobject8 =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,
       expa: [
        {
          exp_typ: this.gstinvoiceform.get('exp_typexpa').value,
          inv: [
            {
              oinum: this.gstinvoiceform.get('oinumexpa').value,
              oidt: this.gstinvoiceform.get('oidtexpa').value,
              inum: this.gstinvoiceform.get('inumexpa').value,
              idt: this.gstinvoiceform.get('idtexpa').value,
              val: this.gstinvoiceform.get('valexpa').value,
              diff_percent: this.gstinvoiceform.get('diff_percent').value,
              sbpcode: this.gstinvoiceform.get('sbpcodeexpa').value,
              sbnum: this.gstinvoiceform.get('sbnumexpa').value,
              sbdt: this.gstinvoiceform.get('sbdtexpa').value,
              itms: [
                {

                  rt: this.gstinvoiceform.get('rtexpa').value,
                  txval: this.gstinvoiceform.get('txvalexpa').value,
                  iamt: this.gstinvoiceform.get('iamtexpa').value,
                  csamt: this.gstinvoiceform.get('csamtexpa').value,
                }
              ]
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
    this.router.navigate(['expa']); 
  }
}
