import { Component, OnInit } from '@angular/core';
import { Message2Service } from '../message2.service';

@Component({
  selector: 'app-child-s2',
  templateUrl: './child-s2.component.html',
  styleUrls: ['./child-s2.component.scss']
})
export class ChildS2Component implements OnInit {

  constructor(private Message2Service2 :Message2Service){}
listc2:number[]=[];
  ngOnInit(): void {
    this.listc2=this.Message2Service2.getNumber();
  }

  addnumberc2(val:any){
  this.Message2Service2.addNumber(val);
  this.listc2=this.Message2Service2.getNumber();

  }

}
