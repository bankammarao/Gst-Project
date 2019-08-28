export interface gstr3bobject {
    gstin:String;
    ret_period:String;
    sup_details:Sup_details;
    inter_sup:Inter_sup;
    itc_elg:Itc_elg;
    inward_sup:Inward_sup;
    intr_ltfee:Intr_ltfee;
    
    
  }
  export interface Sup_details{
    osup_det:Osup_det;
    osup_zero:Osup_zero;
    osup_nil_exmp:Osup_nil_exmp;
    isup_rev:Isup_rev;
    osup_nongst:Osup_nongst;
  }
  export interface Osup_det{
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
    
  }
  export interface Osup_zero{
    txval:number;
    iamt:number;
    csamt:number;
  }

  export interface Osup_nil_exmp{
    txval:number;
  }
  export interface Isup_rev{
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
  }
  export interface Osup_nongst{
    txval:number;
  }
 
  export interface Inter_sup{
    unreg_details:Array<Unreg_details>;
    comp_details:Array<Comp_details>;
    uin_details:Array<Uin_details>;
  }

  export interface Unreg_details
  {
    pos:number;
    txval:number;
    iamt:number;
  }
  // {
  //   pos:number;
  //   txval:number;
  //   iamt:number;
  // }

export interface Comp_details{
    pos:number;
    txval:number;
    iamt:number;
}

export interface Uin_details{
    pos:number;
    txval:number;
    iamt:number;
}
export interface Itc_elg{
    itc_avl:Array<Itc_avl>
    itc_rev:Array<Itc_rev>;
    itc_net:Itc_net;
    itc_inelg:Array<Itc_inelg>;
}

export interface Itc_avl{
    ty:string;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}

export interface Itc_rev{
    ty:string;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}

export interface Itc_net{
    iamt:number;
    camt:number;
    samt:number;
    csamt:number
}

export interface Itc_inelg{
    ty:string;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}

export interface Inward_sup{
    isup_details:Array<Isup_details>;
}
export interface Isup_details{
    ty:string;
    inter:number;
    intra:number;
}
export interface Intr_ltfee{
    intr_details:Intr_details;
}

export interface Intr_details{
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}