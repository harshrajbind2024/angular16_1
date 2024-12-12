import { Component } from '@angular/core';

@Component({
  selector: 'app-child-ngstyle',
  templateUrl: './child-ngstyle.component.html',
  styleUrls: ['./child-ngstyle.component.scss']
})
export class ChildNgstyleComponent {

  people:any[]=[
    {
      "name":"raj p",
      "country":"india"
    },
    {
      "name":"harsh",
      "country":"rassia"
    },
    {
      "name":"raj",
      "country":"usa"
    },
    {
      "name":"bind",
      "country":"india"
    }
  ];


  // getColor(country){
  //   switch(country){
  //     case 'india':
  //     return 'green';
  //     case 'usa':
  //     return 'red';
  //      case 'rassia':
  //     return 'blue'
  //   }
  // }

}
