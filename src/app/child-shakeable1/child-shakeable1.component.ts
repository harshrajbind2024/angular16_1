import { Component, OnInit } from '@angular/core';
import { ShakeableService } from '../shakeable.service';

@Component({
  selector: 'app-child-shakeable1',
  templateUrl: './child-shakeable1.component.html',
  styleUrls: ['./child-shakeable1.component.scss']
})
export class ChildShakeable1Component implements OnInit {
   
 constructor(private useshake1:ShakeableService){}

  ngOnInit(): void {
    
  }

}
