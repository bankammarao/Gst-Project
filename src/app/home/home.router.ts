import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
// import { Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../gaurds/auth.guard';
import { UsersComponent } from './users/users.component';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { EmployeementinfoComponent } from './employeementinfo/employeementinfo.component';
import { VerifyComponent } from './verify/verify.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TaxpayerstypeComponent } from './taxpayerstype/taxpayerstype.component';
import { StateComponent } from './state/state.component';
import { DesignationComponent } from './designation/designation.component';
import { DistrictComponent } from './district/district.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

import { Gstr1Component } from './gstr1/gstr1.component';
import { Gstr3bComponent } from './gstr3b/gstr3b.component';
import { Gstr2Component } from './gstr2/gstr2.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2clComponent } from './b2cl/b2cl.component';
import { B2claComponent } from './b2cla/b2cla.component';
import { B2csComponent } from './b2cs/b2cs.component';
import { B2csaComponent } from './b2csa/b2csa.component';
import { B2baComponent } from './b2ba/b2ba.component';
import { CdnrComponent } from './cdnr/cdnr.component';
import { ExpComponent } from './exp/exp.component';
import { ExpaComponent } from './expa/expa.component';
import { NilComponent } from './nil/nil.component';
import { TxpdComponent } from './txpd/txpd.component';
import { TxpdaComponent } from './txpda/txpda.component';
import { DocissueComponent } from './docissue/docissue.component';
import { CdnurComponent } from './cdnur/cdnur.component';
import { CdnuraComponent } from './cdnura/cdnura.component';
import { CdnraComponent } from './cdnra/cdnra.component';
import { HsnComponent } from './hsn/hsn.component';

import { Addb2bComponent } from './addb2b/addb2b.component';
import { Addb2clComponent } from './addb2cl/addb2cl.component';
import { Addb2claComponent } from './addb2cla/addb2cla.component';
import { Addb2baComponent } from './addb2ba/addb2ba.component';
import { AddcdnrComponent } from './addcdnr/addcdnr.component';
import { AddcdnraComponent } from './addcdnra/addcdnra.component';
import { Addb2csComponent } from './addb2cs/addb2cs.component';
import { Addb2csaComponent } from './addb2csa/addb2csa.component';
import { AddexpComponent } from './addexp/addexp.component';
import { AddexpaComponent } from './addexpa/addexpa.component';
import { AddhsnComponent } from './addhsn/addhsn.component';
import { AddnilComponent } from './addnil/addnil.component';
import { AddtxpdComponent } from './addtxpd/addtxpd.component';
import { AddtxpdaComponent } from './addtxpda/addtxpda.component';
import { AdddocissueComponent } from './adddocissue/adddocissue.component';
import { AddcdnurComponent } from './addcdnur/addcdnur.component';
import { AddcdnuraComponent } from './addcdnura/addcdnura.component';

export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'registered',component:RegisteredcandidateComponent},
    {path:'taxtype', component:TaxpayerstypeComponent},
    {path:'state', component:StateComponent},
    {path:'district', component:DistrictComponent},
    {path:'designation', component:DesignationComponent},
    {path:'dashboard',component:DashboardComponent},
    // {path:'dashboard1',component:Dashboard1Component},
    {path:'users',component:UsersComponent},
    {path:'ethenicgroup',component:EthenicgroupComponent},
	  {path:'status',component:StatusComponent},
    {path:'specialevent',component:SpecialeventComponent},
    {path:'userdetail',component:UserdetailsComponent},
    {path:'servicerequest',component:ServicerequestComponent},
    {path:'testcode',component:TestcodeComponent},
    {path:'postalcode',component:PostalcodeComponent},
   
    {path:'empinfo',component:EmployeementinfoComponent},
    {path:'empinfo/:id',component:EmployeementinfoComponent},
    {path:'verify',component:VerifyComponent},
    {path:'userList', component: UserlistComponent},

    {path:'b2b', component: B2bComponent}, 
    {path:'b2cl', component: B2clComponent}, 
    {path:'b2cla', component: B2claComponent}, 
    {path:'b2cs', component: B2csComponent}, 
    {path:'b2csa', component: B2csaComponent}, 
    {path:'b2ba', component: B2baComponent}, 
    {path:'cdnr', component: CdnrComponent}, 
    {path:'exp', component: ExpComponent}, 
    {path:'expa', component: ExpaComponent}, 
    {path:'nil', component: NilComponent}, 
    {path:'txpd', component: TxpdComponent}, 
    {path:'txpda', component: TxpdaComponent}, 
    {path:'docissue', component: DocissueComponent}, 
    {path:'cdnur', component: CdnurComponent}, 
    {path:'cdnura', component: CdnuraComponent}, 
    {path:'cdnra', component: CdnraComponent}, 
    {path:'hsn', component: HsnComponent},

    {path:'gstr2', component: Gstr2Component}, 
    {path:'gstr1', component: Gstr1Component}, 
    {path:'gstr3b', component: Gstr3bComponent}, 
    {path:'dashboard1/:id',component:Dashboard1Component},

    {path:'addb2b',component:Addb2bComponent},
    {path:'addb2cl',component:Addb2clComponent},
    {path:'addb2cla',component:Addb2claComponent},
    {path:'addb2ba',component:Addb2baComponent},
    {path:'addcdnr',component:AddcdnrComponent},
    {path:'addcdnra',component:AddcdnraComponent},
    {path:'addb2cs',component:Addb2csComponent},
    {path:'addb2csa',component:Addb2csaComponent},
    {path:'addexp',component:AddexpComponent},
    {path:'addexpa',component:AddexpaComponent},
    {path:'addhsn',component:AddhsnComponent},
    {path:'addnil',component:AddnilComponent},
    {path:'addtxpd',component:AddtxpdComponent},
    {path:'addtxpda',component:AddtxpdaComponent},
    {path:'adddocissue',component:AdddocissueComponent},
    {path:'addcdnur',component:AddcdnurComponent},
    {path:'addcdnura',component:AddcdnuraComponent},
 
  ]
}]
