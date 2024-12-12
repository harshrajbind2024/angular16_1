import { Injectable } from '@angular/core';
import {OtherServiceService} from './other-service.service'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // constructor() { }

  // // create a methode 
  // getmethod(){
  //   return "hi i am happy "
  // }



othermsg:string="";
  // link to other sercive
  constructor(private OtherServiceService1:OtherServiceService){
  
  }
  getmethod(){
    return "hi i am happy "
   }

   getMassageFromOtherService(){
  this.othermsg=this.OtherServiceService1.getOtherMessage();
  return this.othermsg;
   }





  // constructor(private _http:HttpClient) { }

  // // create a methode 
  // getmessage(){
  //   return "hi i am happy "
  // }




}
