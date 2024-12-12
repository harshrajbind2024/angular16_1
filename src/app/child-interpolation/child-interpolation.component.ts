import { Component } from '@angular/core';

@Component({
  selector: 'app-child-interpolation',
  templateUrl: './child-interpolation.component.html',
  styleUrls: ['./child-interpolation.component.scss']
})
export class ChildInterpolationComponent {
  title="interpolation"
  last="    last"


  a:number=10;
  b:number=12;
}
