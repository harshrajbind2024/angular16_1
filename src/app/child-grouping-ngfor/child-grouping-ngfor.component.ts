import { Component } from '@angular/core';

@Component({
  selector: 'app-child-grouping-ngfor',
  templateUrl: './child-grouping-ngfor.component.html',
  styleUrls: ['./child-grouping-ngfor.component.scss']
})
export class ChildGroupingNgforComponent {
  
  countryDetails:any;
  constructor(){
    this.countryDetails=[
       {
        'country':'India',
        'people':[
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
         
        ]
       },
       {
        'country':'us',
        'people':[
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
         
        ]
       },
       {
        'country':'russia',
        'people':[
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
          {
            "name":"harsh"
          },
         
        ]
       }
    ]
    
    
  }


}
