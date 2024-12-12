import { Component } from '@angular/core';

@Component({
  selector: 'app-child-attribute',
  templateUrl: './child-attribute.component.html',
  styleUrls: ['./child-attribute.component.scss']
})
export class ChildAttributeComponent {
 cols:number=4;
 bdr:number=10;
}
