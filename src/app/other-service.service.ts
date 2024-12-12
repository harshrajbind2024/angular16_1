import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherServiceService {

  constructor(){}
  getOtherMessage(){
    return "massage from other service"
  }
}
