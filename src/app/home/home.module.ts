import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { AdministrativeuserComponent } from './administrativeuser/administrativeuser.component';
import { EmployeementinfoComponent } from './employeementinfo/employeementinfo.component';
import { VerifyComponent } from './verify/verify.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TaxpayerstypeComponent } from './taxpayerstype/taxpayerstype.component';
import { StateComponent } from './state/state.component';
import { DesignationComponent } from './designation/designation.component';
import { DistrictComponent } from './district/district.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2clComponent } from './b2cl/b2cl.component';
import { B2claComponent } from './b2cla/b2cla.component';
import { B2csComponent } from './b2cs/b2cs.component';
import { B2csaComponent } from './b2csa/b2csa.component';
import { Gstr1Component } from './gstr1/gstr1.component';
import { Gstr3bComponent } from './gstr3b/gstr3b.component';
import { Gstr2Component } from './gstr2/gstr2.component';
import { Addb2bComponent } from './addb2b/addb2b.component';
import { Addb2clComponent } from './addb2cl/addb2cl.component';
import { Addb2claComponent } from './addb2cla/addb2cla.component';
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



@NgModule({
  declarations: [DashboardComponent, HelpComponent, UsersComponent, EthenicgroupComponent,StatusComponent,SpecialeventComponent, 
    UserdetailsComponent, ServicerequestComponent, TestcodeComponent, PostalcodeComponent, RegisteredcandidateComponent, 
    AdministrativeuserComponent, EmployeementinfoComponent, VerifyComponent, UserlistComponent, TaxpayerstypeComponent, 
    StateComponent, DesignationComponent, DistrictComponent, Dashboard1Component, B2bComponent, B2clComponent, B2claComponent, B2csComponent, B2csaComponent, Gstr1Component, Gstr3bComponent, Gstr2Component, Addb2bComponent, Addb2clComponent, Addb2claComponent, B2baComponent, CdnrComponent, ExpComponent, ExpaComponent, NilComponent, TxpdComponent, TxpdaComponent, DocissueComponent, CdnurComponent, CdnuraComponent, CdnraComponent, HsnComponent, Addb2baComponent, AddcdnrComponent, AddcdnraComponent, Addb2csComponent, Addb2csaComponent, AddexpComponent, AddexpaComponent, AddhsnComponent, AddnilComponent, AddtxpdComponent, AddtxpdaComponent, AdddocissueComponent, AddcdnurComponent, AddcdnuraComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule,Ng2SearchPipeModule,NgMultiSelectDropDownModule.forRoot(),NgxPaginationModule
  ]
})
export class HomeModule { }
