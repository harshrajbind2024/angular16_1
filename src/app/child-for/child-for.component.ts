import { Component } from '@angular/core';

@Component({
  selector: 'app-child-for',
  templateUrl: './child-for.component.html',
  styleUrls: ['./child-for.component.scss']
})
export class ChildForComponent {

 students:any[]=[
  {
    'name':'rp'
  },
  {
    'name':'harsh'
  },
  {
    'name':'raj'
  },
  {
    'name':'bind'
  },

 ]
 
}
