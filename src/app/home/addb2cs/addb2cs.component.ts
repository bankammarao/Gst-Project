import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject5 } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addb2cs',
  templateUrl: './addb2cs.component.html',
  styleUrls: ['./addb2cs.component.scss']
})
export class Addb2csComponent implements OnInit  {
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

      "rtb2cs": [null, Validators.required],
      "sply_tyb2cs": [null, Validators.required],
      "txvalb2cs": [null, Validators.required],
      "iamtb2cs": [null, Validators.required],
      "csamtb2cs": [null, Validators.required],
      "posb2cs": [null, Validators.required],

  })
  }

  saveGSTInvoiceobj() {

    let fullObject: fullobject5 =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,
     b2cs: [
        {
          rt: this.gstinvoiceform.get('rtb2cs').value,
          sply_ty: this.gstinvoiceform.get('sply_tyb2cs').value,
          diff_percent: this.gstinvoiceform.get('diff_percent').value,

          typ: this.gstinvoiceform.get('typ').value,
          etin: this.gstinvoiceform.get('etin').value,

          txval: this.gstinvoiceform.get('txvalb2cs').value,
          iamt: this.gstinvoiceform.get('iamtb2cs').value,
          csamt: this.gstinvoiceform.get('csamtb2cs').value,
          pos: this.gstinvoiceform.get('posb2cs').value,
        }
        // {
        //   rt:this.gstinvoiceform.get('rt').value,
        //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
        //   diff_percent:this.gstinvoiceform.get('diff_percent').value,
        //   typ:this.gstinvoiceform.get('typ').value,
        //   etin:this.gstinvoiceform.get('etin').value,
        //   txval:this.gstinvoiceform.get('txval').value,
        //   iamt:this.gstinvoiceform.get('iamt').value,
        //   csamt:this.gstinvoiceform.get('csamt').value,
        //   pos:this.gstinvoiceform.get('pos').value,
        // }
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
    this.router.navigate(['b2cs']); 
  }
}
