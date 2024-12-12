import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ChildComponent } from './child dptc/child.component';
import { Child2Component } from './child2 dctp/child2.component';
import { ChildDirectivesComponent } from './child-directives/child-directives.component';
import { ChildswitchComponent } from './childswitch/childswitch.component';
import { ChildForComponent } from './child-for/child-for.component';
import { ChildTrackApiDataComponent } from './child-track-static-data/child-track-api-data.component';
import { ChildGroupingNgforComponent } from './child-grouping-ngfor/child-grouping-ngfor.component';
import { ChildNgstyleComponent } from './child-ngstyle/child-ngstyle.component';
import { ChildNgclassComponent } from './child-ngclass/child-ngclass.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildInterpolationComponent } from './child-interpolation/child-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ChildAttributeComponent } from './child-attribute/child-attribute.component';
import { ChildEventComponent } from './child-event/child-event.component';
import { ChildTwowayBindingComponent } from './child-twoway-binding/child-twoway-binding.component';
import { ChildPipesComponent } from './child-pipes/child-pipes.component';
import { ChildRoutelinkComponent } from './child-routelink/child-routelink.component';
import { ChildRouteLink2Component } from './child-route-link2/child-route-link2.component';
import { Router } from '@angular/router';
import { ChildPagenotfoundComponent } from './child-pagenotfound/child-pagenotfound.component';
import { ChildServiceComponent } from './child-service/child-service.component';
import { ChildService2Component } from './child-service2/child-service2.component';
import {MessageService} from './message.service';
import { ChildService3Component } from './child-service3/child-service3.component';
import { ChildService4Component } from './child-service4/child-service4.component'
import {OtherServiceService} from './other-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ChildS1Component } from './child-s1/child-s1.component';
import { ChildS2Component } from './child-s2/child-s2.component'
import {Message2Service}from './message2.service';
import { ChildShakeable1Component } from './child-shakeable1/child-shakeable1.component';
import { ChildShakeable2Component } from './child-shakeable2/child-shakeable2.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChildComponent,
    Child2Component,
    ChildDirectivesComponent,
    ChildswitchComponent,
    ChildForComponent,
    ChildTrackApiDataComponent,
    ChildGroupingNgforComponent,
    ChildNgstyleComponent,
    ChildNgclassComponent,
    DataBindingComponent,
    ChildInterpolationComponent,
    PropertyBindingComponent,
    ChildAttributeComponent,
    ChildEventComponent,
    ChildTwowayBindingComponent,
    ChildPipesComponent,
    ChildRoutelinkComponent,
    ChildRouteLink2Component,
    ChildPagenotfoundComponent,
    ChildServiceComponent,
    ChildService2Component,
    ChildService3Component,
    ChildService4Component,
    ChildS1Component,
    ChildS2Component,
    ChildShakeable1Component,
    ChildShakeable2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],


   // globly used servise
  providers: [MessageService,OtherServiceService,Message2Service],
 
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(){
    console.log("appModule loaded");
    
   }

 }
