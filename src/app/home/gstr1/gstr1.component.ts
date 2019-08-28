import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gstr1',
  templateUrl: './gstr1.component.html',
  styleUrls: ['./gstr1.component.scss']
})
export class Gstr1Component implements OnInit {
  departments=[
    { "id":1,"name":"b2b"},
    { "id":2,"name":"b2ba"},
    { "id":3,"name":"b2cl"},
    { "id":4,"name":"b2cla"},
    { "id":5,"name":"b2cs"},
    { "id":6,"name":"b2csa"},
    { "id":7,"name":"nil"},
  ]
 
 
  constructor( private router:Router) { }

  ngOnInit() {
   
  }
  onSelect(item){
    this.router.navigate(['/dashboard1',item.id])
  }
  getb2b(){
    this.router.navigate(['/b2b'])
  }
  getb2ba(){
    this.router.navigate(['/b2ba'])
  }
  getb2cl(){
    this.router.navigate(['/b2cl'])
  }
  getb2cla(){
    this.router.navigate(['/b2cla'])
  }
 
  getcdnr(){
    this.router.navigate(['/cdnr'])
  }
  getcdnra(){
    this.router.navigate(['/cdnra'])
  }
  getb2cs(){
    this.router.navigate(['/b2cs'])
  }
  getb2csa(){
    this.router.navigate(['/b2csa'])
  }
  getexp(){
    this.router.navigate(['/exp'])
  }
  getexpa(){
    this.router.navigate(['/expa'])
  }
  gethsn(){
    this.router.navigate(['/hsn'])
  }
  getnil(){
    this.router.navigate(['/nil'])
  }
  gettxpd(){
    this.router.navigate(['/txpd'])
  }
  gettxpda(){
    this.router.navigate(['/txpda'])
  }
  getdocissue(){
    this.router.navigate(['/docissue'])
  }
  getcdnur(){
    this.router.navigate(['/cdnur'])
  }
  getcdnura(){
    this.router.navigate(['/cdnura'])
  }
  back(){
    this.router.navigate(['dashboard']);    
  }
}
