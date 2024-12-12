import { Component } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-child-service2',
  templateUrl: './child-service2.component.html',
  styleUrls: ['./child-service2.component.scss'],
  // providers:[MessageService]
})
export class ChildService2Component {

  msg:string="";
  constructor(private createObjOfService:MessageService){
     
  }
  ngOnInit(){
   this.msg=this.createObjOfService.getmethod();
  }

}
