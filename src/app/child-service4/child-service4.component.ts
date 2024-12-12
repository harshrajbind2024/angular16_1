import { Component } from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-child-service4',
  templateUrl: './child-service4.component.html',
  styleUrls: ['./child-service4.component.scss']
})
export class ChildService4Component {

  msg:string=" ";
  othermsg:string=" ";
  constructor(private createObjOfService:MessageService){
     
  }

  
  getmassage3(){
    // getmethod() define in   message.service
    this.msg=this.createObjOfService.getmethod();

    this.othermsg=this.createObjOfService.getMassageFromOtherService();
    // return othermsg;
  }


  // constructor(){}
  // getOtherMessage(){
  //   return "massage from other service"
  // }
}

