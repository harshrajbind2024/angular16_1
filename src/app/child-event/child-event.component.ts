import { Component } from '@angular/core';

@Component({
  selector: 'app-child-event',
  templateUrl: './child-event.component.html',
  styleUrls: ['./child-event.component.scss']
})
export class ChildEventComponent {
  showData(){
     console.log('event banding');
     alert('event banding')
     
  }
} 
