import { Component, OnInit } from '@angular/core';
import { ShakeableService } from '../shakeable.service';

@Component({
  selector: 'app-child-shakeable2',
  templateUrl: './child-shakeable2.component.html',
  styleUrls: ['./child-shakeable2.component.scss']
})
export class ChildShakeable2Component implements OnInit {
  constructor(private useshake2:ShakeableService){}

  ngOnInit(): void {
    
  }
}
