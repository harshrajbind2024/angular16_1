import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildRoutelinkComponent}from './child-routelink/child-routelink.component';
import {ChildRouteLink2Component} from './child-route-link2/child-route-link2.component';
import {ChildPagenotfoundComponent} from './child-pagenotfound/child-pagenotfound.component'

const routes: Routes = [
  // {
  //  path:'',redirectTo:'routelink',pathMatch:'full'
  // },
  {
    path:'routelink',component:ChildRoutelinkComponent
  },
  {
    path:'routelink2',component:ChildRouteLink2Component
  },
  {
    path:'**',component:ChildPagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
