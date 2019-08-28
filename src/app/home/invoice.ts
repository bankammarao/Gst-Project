
export interface fullobject {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  b2b: Array<B2b>;
  // b2ba: Array<B2ba>;
  // b2cl: Array<B2cl>;
  // b2cla: Array<B2cla>;
  // cdnr: Array<Cdnr>;


  // b2cs: Array<B2cs>;
  // b2csa: Array<B2csa>;
  // exp: Array<Exp>
  // expa: Array<Expa>
  // nil: Object;
  // txpd: Array<Txpd>;
  // txpda: Array<Txpda>;
  // doc_issue: Doc_issue;
  // cdnur: Array<Cdnur>;
  // cdnura: Array<Cdnura>;

}

export interface fullobject2 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;

  b2cl: Array<B2cl>;

}
export interface fullobject3 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;

  b2cla: Array<B2cla>;

}
export interface fullobject4 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;

  cdnr: Array<Cdnr>;

}

export interface fullobject5 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  b2cs: Array<B2cs>;

}

export interface fullobject6 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  b2csa: Array<B2csa>;

}
export interface fullobject7 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  exp: Array<Exp>

}
export interface fullobject8 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  expa: Array<Expa>

}
export interface fullobject9 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  txpda: Array<Txpda>;

}
export interface fullobject10 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  doc_issue: Doc_issue;

}
export interface fullobject11 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;

  cdnur: Array<Cdnur>;
}
export interface fullobject12 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;

  cdnura: Array<Cdnura>;
}
export interface fullobject13 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  b2ba: Array<B2ba>;
}
export interface fullobject14 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  cdnra: Array<Cdnra>;
}

export interface fullobject15 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  hsn:Object2;
}
export interface fullobject16 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  nil: Object;
}
export interface fullobject17 {
  gstin: String;
  ret_period: String;
  gt: number;
  cur_gt: number;
  txpd: Array<Txpd>;
}
export interface B2b {
  ctin: String;
  inv: Array<Invoice>;

}
export interface Invoice {

  inum: String;

  idt: String;

  val: number;

  pos: String;

  rchrg: String;

  etin: String;

  inv_typ: String;

  diff_percent: number;

  itms: Array<Item>;

}
export interface Item {

  num: number;

  itm_det: ItemDetail;



}
export interface ItemDetail {

  rt: number;

  txval: number;

  iamt: number;

  csamt: number;

}

export interface B2ba {
  ctin: String;
  inv: Array<Invoiceb2ba>;
}

export interface Invoiceb2ba {

  oinum: String;

  oidt: String;
  inum: String;
  idt: String;
  val: number;

  pos: String;

  rchrg: String;

  etin: String;

  inv_typ: String;

  diff_percent: number;

  itms: Array<InvoiceitmsB2ba>;

}

export interface InvoiceitmsB2ba {
  num: number;
  itm_det: ItemDetailB2ba;

}
export interface ItemDetailB2ba {
  rt: number;
  txval: number;
  iamt: number;
  camt: number;
  samt: number;
  csamt: number;
}

export interface B2cl {
  pos: String;
  inv: Array<Invoiceb2cl>

}
export interface Invoiceb2cl {
  inum: String;

  idt: String;

  val: number;
  inv_typ: String;
  etin: String;
  diff_percent: number;

  itms: Array<Itemb2cl>;
}
export interface Itemb2cl {
  num: number;
  itm_det: ItemDetailB2cl;
}
export interface ItemDetailB2cl {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;
}
export interface B2cla {
  pos: number;
  inv: Array<Invoiceb2cla>
}
export interface Invoiceb2cla {
  oinum: String;
  oidt: String;
  inv_typ: String;
  diff_percent: number;
  inum: String;
  idt: String;
  val: number;
  etin: String

  itms: Array<Itmsb2cla>
}
export interface Itmsb2cla {
  num: number;
  itm_det: ItemDetailB2cla;
}
export interface ItemDetailB2cla {
  rt: number;
  txval: number;
  iamt: number;
}


export interface Cdnr {
  ctin: String;
  nt: Array<Invoicecdnr>;
}
export interface Invoicecdnr {
  ntty: String;
  nt_num;
  nt_dt;
  p_gst;
  inum;
  idt: String;

  val: number;

  diff_percent: number;

  itms: Array<Itemcdnr>;
}
export interface Itemcdnr {
  num: number;
  itm_det: ItemDetailcdnr;
}
export interface ItemDetailcdnr {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;
}

export interface B2cs {
  sply_ty: String;
  diff_percent: number;
  rt: number;
  typ: String;
  etin: String;
  pos: String;
  txval: number;
  iamt: number;
  csamt: number;
}
// {
//   rt:number;
//   sply_ty:String;
//   diff_percent:number;
//   typ:String;
//   txval:number;
//   iamt:number;
//   csamt:number;
//   pos:number;
// }
export interface B2csa {
  omon: String;
  sply_ty: String;
  diff_percent: number;
  typ: String;
  etin: String;
  pos: String;
  itms: Array<Itmsb2csa>
}
export interface Itmsb2csa {
  rt: number;
  txval: number;
  iamt: number;
  camt: number;
  samt: number;
  csamt: number;
}
// {
//   rt:number;
//   txval:number;
//   iamt:number;
//   camt:number;
//   samt:number;
//   csamt:number;

// }



export interface Exp {
  exp_typ: String;
  inv: Array<Invoiceexp>

}
// {
//   exp_typ: String;
//   inv: Array<invoiceexp2>()
// }

export interface Invoiceexp {
  inum: String;
  idt: String;
  val: number;
  diff_percent: number;
  sbpcode: String;
  sbnum;
  sbdt;
  itms: Array<Itemexp>;
}
export interface Itemexp {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;

}

// export interface invoiceexp2 {
//   inum: String;
//   idt: String;
//   val: number;
//   diff_percent: number;
//   sbpcode: String;
//   sbnunm;
//   sbdt;
//   itms: Array<Itemexp2>;
// }
// export interface Itemexp2 {
//   rt: number;
//   txval: number;
//   iamt: number;
//   csamt: number;

// }




export interface Expa {
  exp_typ: String;
  inv: Array<Invoiceexpa>

}


export interface Invoiceexpa {
  oinum: String;
  oidt: String;
  inum;
  idt;
  diff_percent: number;
  val: number;
  sbpcode: String;
  sbnum;
  sbdt;
  itms: Array<Itemexpa>;
}
export interface Itemexpa {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;

}


export class Object {
  inv: Array<InvB2csa>
}
export class InvB2csa {
  sply_ty: String;
  expt_amt: number;
  nil_amt: number;
  ngsup_amt: number;
}
// {
//   sply_ty:String;
//   expt_amt:number;
//   nil_amt:number;
//   ngsup_amt:number;
// }


export interface Txpd {
  pos: string;
  sply_ty: string;
  diff_percent: number;
  itms: Array<ItmsTxpd>;
}
export interface ItmsTxpd {
  rt: number;
  ad_amt: number;
  iamt: number;
  csamt: number;
}
export interface Txpda {
  omon: string;
  pos: string;
  sply_ty: string;
  diff_percent: number;
  itms: Array<ItmsTxpda>;
}

export interface ItmsTxpda {
  rt: number;
  ad_amt: number;
  iamt: number;
  csamt: number;
}

export interface Doc_issue {
  doc_det: Array<Doc_det>;
}
export interface Doc_det {
  doc_num: number;
  docs: Array<Docs>;
}

export interface Docs {
  num: number;
  from: string;
  to: string;
  totnum: number;
  cancel: number;
  net_issue: number;
}
export interface Cdnur {
  typ: string;
  ntty: string;
  nt_num: string;
  nt_dt: string;
  p_gst: string;
  inum: string;
  idt: string;
  val: number;
  diff_percent: number;
  itms: Array<Itmscdnur>;
}

export interface Itmscdnur {
  num: number;
  itm_det: Itm_detcdnur;
}
export interface Itm_detcdnur {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;
}
export interface Cdnura {
  ont_num: string;
  ont_dt: string;
  nt_num: string;
  nt_dt: string;
  ntty: string;
  typ: string;
  p_gst: string;
  inum: string;
  val: number;
  idt: string;
  diff_percent: string;
  itms: Array<ItmsCdnura>
}
export interface ItmsCdnura {
  num: number;
  itm_det: Itm_detCdnura;
}
export interface Itm_detCdnura {
  rt: number;
  txval: number;
  iamt: number;
  csamt: number;
}
export interface Cdnra{

  ctin: number;

  nt: Array<Invoicecdnra>

}

export interface Invoicecdnra{

  ntty: string;

  ont_num;

  ont_dt;

  nt_num: string;

  nt_dt: string;

  p_gst: string;

  inum: string;

  diff_percent: string;

  idt: string;

  val: string;

  itms: Array<Invoicecdnraitems>



}

export interface Invoicecdnraitems{

  num: number;

  itm_det: ItemDetailCdnra;

}

export interface ItemDetailCdnra {

  rt: number;

  txval: number;

  iamt: number;

  camt: number;

  samt: number;

  csamt: number;

}

export interface Object2{



data:Array<datavalue>;

}

export interface datavalue{

num:number;

hsn_sc: string;

desc: string;

uqc: string;

qty: number;

val: number;

txval:number;

iamt: number;

csamt:number;

}