import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
// import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'firstproject';
 
 
  // data move child to parent
  // c2data:any;
  // getData(value:any){
  //  this.c2data=value;
  // }


  // // // ngIf value   or    ngIf,else
  // isvalid:boolean=true;
  // chanhgevalue(valid:boolean){
  //   this.isvalid=valid;
  // }

  // ROUTER LINK EXAMPLE
  // constructor(private router1:Router){}
  // routerLink(){
  //   this.router1.navigate(['/routelink'])
  // }




}
