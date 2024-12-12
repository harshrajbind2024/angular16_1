import { Injectable } from '@angular/core';

console.log("ShakeableService use bundled because two component use it ");


@Injectable({
  providedIn: 'root'
})
export class ShakeableService {

  constructor() { }
}
