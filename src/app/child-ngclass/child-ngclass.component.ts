import { Component } from '@angular/core';

@Component({
  selector: 'app-child-ngclass',
  templateUrl: './child-ngclass.component.html',
  styleUrls: ['./child-ngclass.component.scss']
})
export class ChildNgclassComponent {

  constructor(){

  }
  users=[
    'harsh',
    'raj',
    'bind',

  ]


  getNgclassMeth(flag:string){
      let cssClass;
      if(flag=="mode"){
        cssClass={
          'one':true,
          'two':true,
          'three':false
        }
      }
      else{
        cssClass={
          'four':true,
          'three':true

        }
      }
      return cssClass;
  }


}
