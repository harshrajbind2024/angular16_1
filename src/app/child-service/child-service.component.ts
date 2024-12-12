import { Component } from '@angular/core';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.scss']
})
export class ChildServiceComponent {
 msg:string="";
  constructor(private createObjOfService:MessageService){
     
  }
  ngOnInit(){
   this.msg=this.createObjOfService.getmethod();
  }

}
