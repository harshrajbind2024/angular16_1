import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],

  //   // data move child to parent
  // outputs: ['childEvent']  link to child2
})
export class Child2Component {
  

    // data move child to parent
  childEvent=new EventEmitter(); // it is a core library part

  onChange(val:any){
 console.log('value ',val); 
 this.childEvent.emit(val);
  }

  
}
