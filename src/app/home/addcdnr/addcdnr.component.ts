import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject4} from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addcdnr',
  templateUrl: './addcdnr.component.html',
  styleUrls: ['./addcdnr.component.scss']
})
export class AddcdnrComponent implements OnInit {
  getinvoice: any;
  gstinvoiceform: FormGroup;
  invoiceres: any;
  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService,
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

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



      "nttycdnr": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "nt_numcdnr": [null, Validators.required],
      "nt_dtcdnr": [null, Validators.required],
      "p_gstcdnr": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "inumcdnr": [null, Validators.required],
      "valcdnr": [null, Validators.required],
      "numcdnr": [null, Validators.required],
      "rtcdnr": [null, Validators.required],
      "txvalcdnr": [null, Validators.required],
      "iamtcdnr": [null, Validators.required],
      "csamtcdnr": [null, Validators.required],


     
  })
}

  saveGSTInvoiceobj() {

    let fullObject: fullobject4 =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,

 cdnr: [
        {
          ctin: this.gstinvoiceform.get('ctin').value,
          nt: [
            {
              ntty: this.gstinvoiceform.get('nttycdnr').value,
              nt_num: this.gstinvoiceform.get('nt_numcdnr').value,
              nt_dt: this.gstinvoiceform.get('nt_dtcdnr').value,
              p_gst: this.gstinvoiceform.get('p_gstcdnr').value,
              inum: this.gstinvoiceform.get('inumcdnr').value,
              idt: this.gstinvoiceform.get('idt').value,
              val: this.gstinvoiceform.get('valcdnr').value,
              diff_percent: this.gstinvoiceform.get('diff_percent').value,
              itms: [
                {
                  num: this.gstinvoiceform.get('numcdnr').value,
                  itm_det:
                  {
                    rt: this.gstinvoiceform.get('rtcdnr').value,
                    txval: this.gstinvoiceform.get('txvalcdnr').value,
                    iamt: this.gstinvoiceform.get('iamtcdnr').value,
                    csamt: this.gstinvoiceform.get('csamtcdnr').value
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
    this.router.navigate(['cdnr']); 
  }
}

