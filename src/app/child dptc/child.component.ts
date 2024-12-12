import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  inputs: ['pdata']
})
export class ChildComponent {
//  @Input() pdata:any;  // or it's use decoretor
pdata:any;

}
