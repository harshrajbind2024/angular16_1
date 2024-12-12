import { Component } from '@angular/core';

@Component({
  selector: 'app-child-twoway-binding',
  templateUrl: './child-twoway-binding.component.html',

  styleUrls: ['./child-twoway-binding.component.scss'],
})
export class ChildTwowayBindingComponent {
  data:any='harsh'

// // it not work
//   value:string='';
//   updateValue(event: Event): void {
//     const target = event.target as HTMLInputElement;
//     this.value = target?.value ?? ''; // Use a fallback if target.value is null/undefined
//   }

name: string = 'harsh';


}
