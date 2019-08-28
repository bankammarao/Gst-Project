export interface gstr2object{
    gstin:string;
    fp:string;
    b2b:Array<B2b>;
    b2bur:Array<B2bur>;
    cdn:Array<Cdn>;
    hsnsum:Hsnsum;
    imp_g:Array<Imp_g>;
    imp_s:Array<Imp_s>;
    nil_supplies:Nil_supplies;
    txi:Array<Txi>;
    txpd:Array<Txpd>;
    itc_rvsl:Itc_rvsl;
    cdnur:Array<Cdnur>;
    isd:Array<Isd>;
}
export interface B2b{
    ctin:string;
    inv:Array<Inv>;
    inum:string;
    idt:string;
    val:number;
    pos:string;
    rchrg:string;
    inv_typ:string;
    itms:Array<Itms>;
}
export interface Inv
{
    inum:string;
    idt:string;
    val:number;
    pos:string;
    rchrg:string;
    inv_typ:string;

    // flag:string;
    // chksum:string;
    //inum:string;
    //idt:string;
    //val:string;
    //pos:string;
    //rchrg:string;
    //inv_typ:string;

     //flagobj:Flagobj;
     itms:Array<Itms>;
}

export interface Itms
{
    num:number;
   
   
  
    itm_det:Itm_det;
    itc:Itc;
}
export interface Itm_det
{

    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
   
}
export interface Itc
{
    elg:string;
    tx_i:number;
    tx_s:number;
    tx_c:number;
    tx_cs:number;
    
}



export interface Itms{
    num:number;
    itm_det:Itm_det;
    itc:Itc;
}
export interface Itm_det{
    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}
export interface Itc{
    elg:string;
    tx_i:number;
    tx_s:number;
    tx_c:number;
    tx_cs:number;
}

export interface B2bur{
    inv:Array<Inv>;
}
export interface Inv{
    chksum: string;
    inum: string;
    idt: string;
    val: number;
    pos: string;
    itms:Array<Itms>;
    flag:string;
    rchrg:string;
    inv_typ:string
}

export interface Itms{
    num:number;
    itm_det:Itm_det;
    itc:Itc;
}
export interface Itm_det{
    // rt:number;
    txval:number;
    rt:number;
    iamt:number;
    csamt:number;
    samt:number;
    camt:number;
}
export interface Itc{
    elg:string;
    tx_i:number;
    tx_s:number;
    tx_c:number;
    tx_cs:number;
}

export interface Cdn{
    ctin:number;
    nt:Array<Nt>;
}
export interface Nt{
    ntty: string;
    nt_num: string;
    nt_dt: string;
    rsn: string;
    p_gst: string;
    inum: string;
    idt: string;
    val: number;
    itms:Array<Itms>;
}

export interface Itms{
    num:number;
    itm_det:Itm_det;
    itc:Itc;
}
export interface Itm_det{
    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}
export interface Itc{
    elg:string;
    tx_i:number;
    tx_s:number;
    tx_c:number;
    tx_cs:number;
}

export interface Hsnsum{
    det:Array<Det>;
}
export interface Det{
    num: number;
    hsn_sc: string;
    desc: string;
    uqc: string;
    qty: number;
    val: number;
    txval: number;
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;

}
export interface Imp_g
{
    is_sez: string;
    stin: string;
    boe_num: string;
    boe_dt: string;
    boe_val: number;
    port_code: string;
    itms:Array<Itms>;
}

export interface Itms{
    num: number;
    txval: number;
    rt: number;
    iamt: number;
    csamt: number;
    elg: string;
    tx_i: number;
    tx_cs: number;
}
export interface Imp_s{
    inum: string;
    idt: string;
    ival: number;
    pos: string;
    itms:Array<Itms>
}

export interface Itms{
    num: number;
    txval: number;
    elg: string;
    rt: number;
    iamt: number;
    csamt: number;
    tx_i: number;
    tx_cs: number;
}

export interface Nil_supplies{
    nil_supplies:Nil_supplies;
}
export interface Nil_supplies{
      cpddr: number;
      exptdsply: number;
      ngsply: number;
      nilsply: number;
      intra:Intra;
}
export interface Intra{
    cpddr: number;
    exptdsply: number;
    ngsply: number;
    nilsply: number;
    intra:Intra;
}

export interface Txi
{
    pos: string;
    sply_ty: string;
    itms:Array<Itms>;
}

export interface Itms{
    num: number;
    rt: number;
    adamt: number;
    iamt: number;
    camt: number;
    samt: number;
    csamt: number
}

export interface Txpd{
    pos: string;
    sply_ty: string;
    itms:Array<Itms>;
}
export interface Itms{
    num: number;
    rt: number;
    adamt: number;
    iamt: number;
    camt: number;
    samt: number;
    csamt: number
}
export interface Itc_rvsl{
    rule2_2:Rule2_2;
    rule7_1_m:Rule7_1_m;
    rule8_1_h:Rule8_1_h;
    rule7_2_a:Rule7_2_a;
    rule7_2_b:Rule7_2_b;
    revitc:Revitc;
    other:Other;
}
export interface Rule2_2{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
   
}
export interface Rule7_1_m{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
   
}

export interface Rule8_1_h{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
    
}
export interface Rule7_2_a{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
   
}
export interface Rule7_2_b{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
   
}
export interface Revitc{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
   
}

export interface Other{
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;
}
export interface Cdnur{
    rtin: string;
    ntty: string;
    nt_num: string;
    rsn: string;
    p_gst: string;
    inum: string;
    idt: string;
    val: number;
    inv_typ: string;
    itms:Array<Itms>;
    itc:Itc;
}
export interface Itms{
    num: number;
    rt: number;
    adamt: number;
    iamt: number;
    camt: number;
    samt: number;
    csamt: number
}
export interface Itc{
    elg: string;
    rt: number;
    iamt: number;
    csamt: number;
    tx_i: number;
    tx_cs: number;

}
export interface Isd{
    ctin: string;
    doclist:Array<Doclist>;
}

export interface Doclist{
    chksum: string;
    isd_docty: string;
    docnum: string;
    docdt: string;
    itc_elg: string;
    tx_i: number;
    tx_c: number;
    tx_s: number;
    tx_cs: number;

}






// {
//     "gstin": "07CQZCD1111I4Y3",
//     "fp": "012016",
//     "b2b": [
//       {
//         "ctin": "01AABCE2207R1Z5",
//         "inv": [
//           {
//             "inum": "S008400",
//             "idt": "24-11-2016",
//             "val": 729248.16,
//             "pos": "06",
//             "rchrg": "N",
//             "inv_typ": "R",
//             "itms": [
//               {
//                 "num": 1,
//                 "itm_det": {
//                   "rt": 10.1,
//                   "txval": 6210.99,
//                   "iamt": 0,
//                   "camt": 614.44,
//                   "samt": 5.68,
//                   "csamt": 621.09
//                 },
//                 "itc": {
//                   "elg": "ip",
//                   "tx_i": 147.2,
//                   "tx_s": 159.3,
//                   "tx_c": 159.3,
//                   "tx_cs": 0
//                 }
//               }
//             ]
//           },
//           {
//             "flag": "M",
//             "chksum": "adsgshaklfsgdhdydudjdk",
//             "inum": "S008401",
//             "idt": "24-11-2016",
//             "val": 729248.16,
//             "pos": "06",
//             "rchrg": "N",
//             "inv_typ": "R",
//             "itms": [
//               {
//                 "num": 1,
//                 "itm_det": {
//                   "rt": 10.1,
//                   "txval": 6210.99,
//                   "iamt": 0,
//                   "camt": 614.44,
//                   "samt": 5.68,
//                   "csamt": 621.09
//                 },
//                 "itc": {
//                   "elg": "ip",
//                   "tx_i": 147.2,
//                   "tx_s": 159.3,
//                   "tx_c": 159.3,
//                   "tx_cs": 0
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     "b2bur": [
//       {
//         "inv": [
//           {
//             "chksum": "AflJufPlFStqKBZ",
//             "inum": "S008400",
//             "idt": "24-11-2016",
//             "val": 729248.16,
//             "pos": "06",
//             "sply_ty": "INTRA",
//             "itms": [
//               {
//                 "num": 1,
//                 "itm_det": {
//                   "rt": 10.1,
//                   "txval": 6210.99,
//                   "camt": 614.44,
//                   "samt": 5.68,
//                   "iamt": 0,
//                   "csamt": 621.09
//                 },
//                 "itc": {
//                   "elg": "ip",
//                   "tx_s": 159.3,
//                   "tx_c": 159.3,
//                   "tx_i": 0,
//                   "tx_cs": 0
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     "cdn": [
//       {
//         "ctin": "01AAAAP1208Q1ZS",
//         "nt": [
//           {
//             "ntty": "C",
//             "nt_num": "533515",
//             "nt_dt": "23-09-2016",
//             "rsn": "Not Mentioned",
//             "p_gst": "N",
//             "inum": "915914",
//             "idt": "23-09-2016",
//             "val": 7348.2,
//             "itms": [
//               {
//                 "num": 1,
//                 "itm_det": {
//                   "rt": 10,
//                   "txval": 5225.28,
//                   "iamt": 845.22,
//                   "camt": 37661.29,
//                   "samt": 42.13,
//                   "csamt": 789.52
//                 },
//                 "itc": {
//                   "elg": "ip",
//                   "tx_i": 147.2,
//                   "tx_s": 159.3,
//                   "tx_c": 159.3,
//                   "tx_cs": 0
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     "hsnsum": {
//       "det": [
//         {
//           "num": 1,
//           "hsn_sc": "40561111",
//           "desc": "Goods Description",
//           "uqc": "Kg",
//           "qty": 80,
//           "val": 9000.5,
//           "txval": 8451.65,
//           "iamt": 0,
//           "camt": 0.83,
//           "samt": 6736920.69,
//           "csamt": 0
//         }
//       ]
//     },
//     "imp_g": [
//       {
//         "is_sez": "Y",
//         "stin": "01AABCE2207R1Z5",
//         "boe_num": "2566209",
//         "boe_dt": "18-04-2016",
//         "boe_val": 338203.29,
//         "port_code": "002409",
//         "itms": [
//           {
//             "num": 1,
//             "txval": 582.88,
//             "rt": 10.5,
//             "iamt": 159.3,
//             "csamt": 159.3,
//             "elg": "ip",
//             "tx_i": 123.02,
//             "tx_cs": 0
//           }
//         ]
//       }
//     ],
//     "imp_s": [
//       {
//         "inum": "85619",
//         "idt": "22-03-2016",
//         "ival": 962559.86,
//         "pos": "28",
//         "itms": [
//           {
//             "num": 1,
//             "txval": 582.88,
//             "elg": "ip",
//             "rt": 10.5,
//             "iamt": 123.02,
//             "csamt": 0,
//             "tx_i": 500,
//             "tx_cs": 0
//           }
//         ]
//       }
//     ],
//     "nil_supplies": {
//       "inter": {
//         "cpddr": 0,
//         "exptdsply": 5394970.87,
//         "ngsply": 992.93,
//         "nilsply": 0
//       },
//       "intra": {
//         "cpddr": 1000,
//         "exptdsply": 5394970.87,
//         "ngsply": 992.93,
//         "nilsply": 0
//       }
//     },
//     "txi": [
//       {
//         "pos": "05",
//         "sply_ty": "INTER",
//         "itms": [
//           {
//             "num": 1,
//             "rt": 5,
//             "adamt": 100,
//             "iamt": 9400,
//             "camt": 0,
//             "samt": 0,
//             "csamt": 500
//           }
//         ]
//       }
//     ],
//     "txpd": [
//       {
//         "pos": "05",
//         "sply_ty": "INTER",
//         "itms": [
//           {
//             "num": 1,
//             "rt": 5,
//             "adamt": 100,
//             "iamt": 9400,
//             "camt": 0,
//             "samt": 0,
//             "csamt": 500
//           }
//         ]
//       }
//     ],
//     "itc_rvsl": {
//       "rule2_2": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "rule7_1_m": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "rule8_1_h": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "rule7_2_a": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "rule7_2_b": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "revitc": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       },
//       "other": {
//         "iamt": 0,
//         "camt": 13,
//         "samt": 13,
//         "csamt": 12
//       }
//     },
//     "cdnur": [
//       {
//         "rtin": "01AAAAP1208Q1ZS",
//         "ntty": "C",
//         "nt_num": "533515",
//         "nt_dt": "23-09-2016",
//         "rsn": "Not Mentioned",
//         "p_gst": "N",
//         "inum": "915914",
//         "idt": "23-09-2016",
//         "val": 7348.2,
//         "inv_typ": "B2BUR",
//         "itms": [
//           {
//             "num": 1,
//             "itm_det": {
//               "rt": 10,
//               "txval": 5225.28,
//               "camt": 37661.29,
//               "samt": 42.13,
//               "iamt": 0,
//               "csamt": 789.52
//             },
//             "itc": {
//               "elg": "ip",
//               "tx_s": 159.3,
//               "tx_c": 159.3,
//               "tx_i": 0,
//               "tx_cs": 0
//             }
//           }
//         ]
//       }
//     ],
//     "isd": [
//       {
//         "ctin": "16DEFPS8555D1Z7",
//         "doclist": [
//           {
//             "chksum": "AflJufPlFStqKBZ",
//             "isd_docty": "ISD",
//             "docnum": "1004",
//             "docdt": "02-03-2016",
//             "itc_elg": "N",
//             "tx_i": 0,
//             "tx_c": 0,
//             "tx_s": 0,
//             "tx_cs": 0
//           }
//         ]
//       }
//     ]
//   }




















