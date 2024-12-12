import { Component } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-child-service3',
  templateUrl: './child-service3.component.html',
  styleUrls: ['./child-service3.component.scss']
})
export class ChildService3Component {
  msg:string="";
  constructor(private createObjOfService:MessageService){
     
  }

  
  getmassage3(){
    // getmethod() define in   message.service
    this.msg=this.createObjOfService.getmethod();
  }

}
