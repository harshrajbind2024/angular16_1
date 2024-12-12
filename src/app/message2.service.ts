import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

console.log("num list service loaded");

@Injectable()
export class Message2Service {
  list:number[]=[100];
  constructor() { }
  addNumber(num:number){
    this.list.push(num);
  }
   getNumber(){
    return this.list;
   }
}
