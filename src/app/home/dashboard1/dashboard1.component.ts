import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';


import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  getinvoice:any;
  gstinvoiceform: FormGroup;
  invoiceres: any;
  public departmentid;


  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService,
    private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private index: IndexService) {


  }
  backClicked() {
    this.router.navigate(['/gstr1']);
  }

 
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






      "posb2ba": [null, Validators.required],
      "inumb2ba": [null, Validators.required],
      "idtb2ba": [null, Validators.required],
      "valb2ba": [null, Validators.required],
      "numb2ba": [null, Validators.required],
      "rtb2ba": [null, Validators.required],
      "txvalb2ba": [null, Validators.required],
      "iamtb2ba": [null, Validators.required],
      "camtb2ba": [null, Validators.required],
      "samtb2ba": [null, Validators.required],
      "csamtb2ba": [null, Validators.required],


      "posb2cl": [null, Validators.required],
      "inumb2cl": [null, Validators.required],
      "idtb2cl": [null, Validators.required],
      "valb2cl": [null, Validators.required],
      "numb2cl": [null, Validators.required],
      "rtb2cl": [null, Validators.required],
      "txvalb2cl": [null, Validators.required],
      "iamtb2cl": [null, Validators.required],
      "csamtb2cl": [null, Validators.required],

      "oinumb2cla": [null, Validators.required],
      "oidtab2cla": [null, Validators.required],
      "inumb2cla":[null, Validators.required],
      "idtb2cla": [null, Validators.required],
      "valb2cla": [null, Validators.required],
      "numb2cla": [null, Validators.required],
      "rtb2cla": [null, Validators.required],
      "txvalb2cla": [null, Validators.required],
      "iamtb2cla": [null, Validators.required],


      "rtb2cs": [null, Validators.required],
      "sply_tyb2cs": [null, Validators.required],
      "txvalb2cs": [null, Validators.required],
      "iamtb2cs": [null, Validators.required],
      "csamtb2cs": [null, Validators.required],
      "posb2cs": [null, Validators.required],


      "omonb2csa": [null, Validators.required],
      "sply_tyb2csa": [null, Validators.required],
      "posb2csa": [null, Validators.required],
      "rtb2csa": [null, Validators.required],
      "txvalb2csa": [null, Validators.required],
      "iamtb2csa": [null, Validators.required],
      "camtb2csa": [null, Validators.required],
      "samtb2csa": [null, Validators.required],
      "csamtb2csa": [null, Validators.required],

      "sply_tynill": [null, Validators.required],
      "expt_amtnill": [null, Validators.required],
      "nil_amtnill": [null, Validators.required],
      "ngsup_amtnill": [null, Validators.required],
     
    });
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentid=id;
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


      // b2ba: [{
      //   ctin: this.gstinvoiceform.get('ctin').value,
      //   inv: [

      //     {

      //       oinum: this.gstinvoiceform.get('oinum').value,

      //       oidt: this.gstinvoiceform.get('oidt').value,

      //       inum: this.gstinvoiceform.get('inumb2ba').value,
      //       idt: this.gstinvoiceform.get('idtb2ba').value,
      //       val: this.gstinvoiceform.get('valb2ba').value,

      //       pos: this.gstinvoiceform.get('posb2ba').value,

      //       rchrg: this.gstinvoiceform.get('rchrg').value,

      //       etin: this.gstinvoiceform.get('etin').value,

      //       inv_typ: this.gstinvoiceform.get('inv_typ').value,

      //       diff_percent: this.gstinvoiceform.get('diff_percent').value,

      //       itms: [
      //         {
      //           num: this.gstinvoiceform.get('numb2ba').value,

      //           itm_det: {

      //             rt: this.gstinvoiceform.get('rtb2ba').value,

      //             txval: this.gstinvoiceform.get('txvalb2ba').value,

      //             iamt: this.gstinvoiceform.get('iamtb2ba').value,
      //             camt: this.gstinvoiceform.get('camtb2ba').value,
      //             samt: this.gstinvoiceform.get('samtb2ba').value,
      //             csamt: this.gstinvoiceform.get('csamtb2ba').value,


      //           }

      //         }

      //       ]

      //     }

      //   ]
      // }
      // ],


      // b2cl: [
      //   {
      //     pos: this.gstinvoiceform.get('posb2cl').value,
      //     inv: [
      //       {
      //         inum: this.gstinvoiceform.get('inumb2cl').value,
      //         idt: this.gstinvoiceform.get('idtb2cl').value,
      //         val: this.gstinvoiceform.get('valb2cl').value,
      //         inv_typ: this.gstinvoiceform.get('inv_typ').value,
      //         etin: this.gstinvoiceform.get('etin').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         itms: [
      //           {
      //             num: this.gstinvoiceform.get('numb2cl').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rtb2cl').value,
      //               txval: this.gstinvoiceform.get('txvalb2cl').value,
      //               iamt: this.gstinvoiceform.get('iamtb2cl').value,
      //               csamt: this.gstinvoiceform.get('csamtb2cl').value,
      //             }

      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],


      // b2cla: [
      //   {
      //     pos: this.gstinvoiceform.get('pos').value,
      //     inv: [
      //       {
      //         oinum: this.gstinvoiceform.get('oinumb2cla').value,
      //         oidt: this.gstinvoiceform.get('oidtab2cla').value,
      //         inv_typ: this.gstinvoiceform.get('inv_typ').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         inum: this.gstinvoiceform.get('inumb2cla').value,
      //         idt: this.gstinvoiceform.get('idt').value,
      //         val: this.gstinvoiceform.get('val').value,
      //         etin: this.gstinvoiceform.get('val').value,
      //         itms: [
      //           {
      //             num: this.gstinvoiceform.get('num').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rt').value,
      //               txval: this.gstinvoiceform.get('txval').value,
      //               iamt: this.gstinvoiceform.get('txval').value,
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],


      // b2cs: [
      //   {
      //     rt: this.gstinvoiceform.get('rtb2cs').value,
      //     sply_ty: this.gstinvoiceform.get('sply_tyb2cs').value,
      //     diff_percent: this.gstinvoiceform.get('diff_percent').value,

      //     typ: this.gstinvoiceform.get('typ').value,
      //     etin: this.gstinvoiceform.get('etin').value,

      //     txval: this.gstinvoiceform.get('txvalb2cs').value,
      //     iamt: this.gstinvoiceform.get('iamtb2cs').value,
      //     csamt: this.gstinvoiceform.get('csamtb2cs').value,
      //     pos: this.gstinvoiceform.get('posb2cs').value,
      //   }
      //   // {
      //   //   rt:this.gstinvoiceform.get('rt').value,
      //   //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
      //   //   diff_percent:this.gstinvoiceform.get('diff_percent').value,
      //   //   typ:this.gstinvoiceform.get('typ').value,
      //   //   etin:this.gstinvoiceform.get('etin').value,
      //   //   txval:this.gstinvoiceform.get('txval').value,
      //   //   iamt:this.gstinvoiceform.get('iamt').value,
      //   //   csamt:this.gstinvoiceform.get('csamt').value,
      //   //   pos:this.gstinvoiceform.get('pos').value,
      //   // }
      // ],


      // b2csa: [
      //   {
      //     omon: this.gstinvoiceform.get('omonb2csa').value,
      //     sply_ty: this.gstinvoiceform.get('sply_tyb2csa').value,
      //     diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //     typ: this.gstinvoiceform.get('typ').value,
      //     etin: this.gstinvoiceform.get('etin').value,
      //     pos: this.gstinvoiceform.get('posb2csa').value,
      //     itms: [
      //       {
      //         rt: this.gstinvoiceform.get('rtb2csa').value,
      //         txval: this.gstinvoiceform.get('txvalb2csa').value,
      //         iamt: this.gstinvoiceform.get('iamtb2csa').value,
      //         camt: this.gstinvoiceform.get('camtb2csa').value,
      //         samt: this.gstinvoiceform.get('samtb2csa').value,
      //         csamt: this.gstinvoiceform.get('csamtb2csa').value,
      //       }
      //       // {
      //       //   rt:this.gstinvoiceform.get('rt').value,
      //       //   txval:this.gstinvoiceform.get('txval').value,
      //       //   iamt:this.gstinvoiceform.get('iamt').value,
      //       //   camt:this.gstinvoiceform.get('camt').value,
      //       //   samt:this.gstinvoiceform.get('samt').value,
      //       //   csamt:this.gstinvoiceform.get('csamt').value,
      //       // }
      //     ]
      //   }
      // ],


      // nil:
      // {
      //   inv: [
      //     {
      //       sply_ty: this.gstinvoiceform.get('sply_tynill').value,
      //       expt_amt: this.gstinvoiceform.get('expt_amtnill').value,
      //       nil_amt: this.gstinvoiceform.get('nil_amtnill').value,
      //       ngsup_amt: this.gstinvoiceform.get('ngsup_amtnill').value,
      //     }
      //     // {
      //     //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
      //     //   expt_amt:this.gstinvoiceform.get('expt_amt').value,
      //     //   nil_amt:this.gstinvoiceform.get('nil_amt').value,
      //     //   ngsup_amt:this.gstinvoiceform.get('ngsup_amt').value,
      //     // }
      //   ]
      // }

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
}
