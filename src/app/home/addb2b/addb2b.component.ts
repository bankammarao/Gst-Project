import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addb2b',
  templateUrl: './addb2b.component.html',
  styleUrls: ['./addb2b.component.scss']
})
export class Addb2bComponent implements OnInit {
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



  })
  }

  saveGSTInvoiceobj() {

    let fullObject: fullobject =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,
      b2b: [{
        ctin: this.gstinvoiceform.get('ctin').value,
        inv: [
          {

            inum: this.gstinvoiceform.get('inum').value,

            idt: this.gstinvoiceform.get('idt').value,

            val: this.gstinvoiceform.get('val').value,

            pos: this.gstinvoiceform.get('pos').value,

            rchrg: this.gstinvoiceform.get('rchrg').value,

            etin: this.gstinvoiceform.get('etin').value,

            inv_typ: this.gstinvoiceform.get('inv_typ').value,

            diff_percent: this.gstinvoiceform.get('diff_percent').value,

            itms: [
              {
                num: this.gstinvoiceform.get('num').value,

                itm_det: {

                  rt: this.gstinvoiceform.get('rt').value,

                  txval: this.gstinvoiceform.get('txval').value,

                  iamt: this.gstinvoiceform.get('iamt').value,

                  csamt: this.gstinvoiceform.get('csamt').value

                }

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
  this.router.navigate(['b2b']); 
}

}
