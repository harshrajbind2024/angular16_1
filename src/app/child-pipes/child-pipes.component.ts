import { Component } from '@angular/core';

@Component({
  selector: 'app-child-pipes',
  templateUrl: './child-pipes.component.html',
  styleUrls: ['./child-pipes.component.scss']
})
export class ChildPipesComponent {
employees:any[]=[
  {
    code:"emp001",name:"raj",salary:100000,dob:'12/04/2001'
  }
  ,
  {
    code:"emp002",name:"harsh",salary:100000,dob:'12/04/2001'
  },
  {
    code:"emp003",name:"rabindj",salary:100000,dob:'12/04/2001'
  },
  {
    code:"emp004",name:"raj bind",salary:100000,dob:'12/04/2001'
  }
];



DOB=new Date(1223,5,2);
}
