import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from './gstr3b';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr3b',
  templateUrl: './gstr3b.component.html',
  styleUrls: ['./gstr3b.component.scss']
})
export class Gstr3bComponent implements OnInit {

  gstr3bform:FormGroup;
  gstr3bres:any;

  constructor( private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() {
    {
      this.gstr3bform = this.fb.group({
        "gstin": [null, Validators.required],
        "ret_period": [null, Validators.required],
        "txval": [null, Validators.required],
        "iamt": [null, Validators.required],
        "camt": [null, Validators.required],
        "samt": [null, Validators.required],
        "csamt": [null, Validators.required],
        "pos": [null, Validators.required],
        "ty": [null, Validators.required],
        "inter": [null, Validators.required],
        "intra": [null, Validators.required],
      });
    }
  }


savegst3bobj(){
    let Gstr3bobject:gstr3bobject = 
    {
      gstin:this.gstr3bform.get('gstin').value,
      ret_period:this.gstr3bform.get('ret_period').value,
      sup_details:
      {
        osup_det:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,

        },
        osup_zero:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          csamt:this.gstr3bform.get('csamt').value,
        },
        osup_nil_exmp:
        {
          txval:this.gstr3bform.get('txval').value,
        },
        isup_rev:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,
        },
        osup_nongst:
        {
          txval:this.gstr3bform.get('txval').value,
        }
      },
      inter_sup:
      {
        unreg_details:
        [
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          }
        ],
        comp_details:
        [
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          }
        ],
        uin_details:
        [
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          }
        ]
      },
      itc_elg:
      {
        itc_avl:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ],
        itc_rev:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ],
        itc_net:
        {
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
        },
        itc_inelg:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ]
      },
      inward_sup:
      {
        isup_details:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            inter:this.gstr3bform.get('inter').value,
           intra:this.gstr3bform.get('intra').value,
          }
        ]
      },
      intr_ltfee:
      {
        intr_details:
        {
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,

        }
      }
}
console.log('Gstr3bobject',Gstr3bobject);
this.dataservice.saveGstr3bInvoice(Gstr3bobject).subscribe(response => {
  this.gstr3bres = response;
  console.log(this.gstr3bres);
  {
    swal(this.gstr3bres.ref_id, "","success");
     }
        
})
}


}




