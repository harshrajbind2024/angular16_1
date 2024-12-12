import { Component } from '@angular/core';

@Component({
  selector: 'app-child-track-api-data',
  templateUrl: './child-track-api-data.component.html',
  styleUrls: ['./child-track-api-data.component.scss']
})
export class ChildTrackApiDataComponent {

  students:any;

  constructor(){
    this.students=[
      {
        studentId:10,
        name:'harsh',
        gender:'male',
        age:23,
        cource:'b.tech'    
      },
      {
        studentId:20,
        name:'raj',
        gender:'male',
        age:23,
        cource:'b.tech'    
      },
      {
        studentId:30,
        name:'ayushi',
        gender:'female',
        age:21,
        cource:'bsc'    
      },
      {
        studentId:40,
        name:'awasthi',
        gender:'male',
        age:2,
        cource:'b.tech'    
      }
    ];
  }



  getMoreStudent():void{
    this.students=[
      {
        studentId:1,
        name:'harsh',
        gender:'male',
        age:23,
        cource:'b.tech'    
      },
      {
        studentId:2,
        name:'raj',
        gender:'male',
        age:23,
        cource:'b.tech'    
      },
      {
        studentId:3,
        name:'ayushi',
        gender:'female',
        age:21,
        cource:'bsc'    
      },
      {
        studentId:4,
        name:'awasthi',
        gender:'male',
        age:2,
        cource:'b.tech'    
      },
      {
        studentId:5,
        name:'bind',
        gender:'male',
        age:5,
        cource:'b.tech'    
      }
    ];
  }





  trackBystudentId(index:number,student:any):string{
    return student.studentId;

  }

}
