import { Component, OnInit } from '@angular/core';
import {Message2Service} from '../message2.service'
@Component({
  selector: 'app-child-s1',
  templateUrl: './child-s1.component.html',
  styleUrls: ['./child-s1.component.scss']
})
export class ChildS1Component implements OnInit {
  // message2:any;

 list1:number[]=[];
 constructor( private Message2Service1:Message2Service ){} 

 ngOnInit():void{
 this.list1=this.Message2Service1.getNumber();
 }

  addNumber(val:any){
    this.Message2Service1.addNumber(val);
    this.list1=this.Message2Service1.getNumber();

  }
}
