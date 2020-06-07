import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {Router, RouterModule} from '@angular/router';
// import {MyRouteModule} from './myRouteModule'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ExampleComponent } from './example/example.component';
import { ParamComponent } from './second/param.component';
import { ThirdComponent } from './components/third/third.component';
import { QueryComponent } from './second/query.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { DemoService } from './services/demo.service';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SessionlistComponent } from './components/sessionlist/sessionlist.component';
import { CustomHttpInterceptor } from './customHttpInterceptor';
import { AddSessionComponent } from './components/session/add-session/add-session.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { TemplateReferenceComponent } from './example/template-reference/template-reference.component';
import { SecureHomeComponent } from './components/secure-home/secure-home.component';
import { PublicMasterComponent } from './public-master/public-master.component';
import { SessiondetailComponent } from './components/sessionlist/sessiondetail.component';
import { DashboardComponent } from './components/secure-home/dashboard/dashboard.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { GenderPipe } from './gender.pipe';
import { AddSession2Component } from './components/session/add-session2/add-session2.component';
import { AddSessionReactiveComponent } from './components/session/add-session-reactive/add-session-reactive.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent, ExampleComponent, ParamComponent, ThirdComponent
    , QueryComponent, PageNotFOundComponent, StudentlistComponent, StudentDetailComponent
    , SessionlistComponent, AddSessionComponent, TemplateReferenceComponent, SecureHomeComponent
    , PublicMasterComponent, SessiondetailComponent, DashboardComponent, PipedemoComponent
    , GenderPipe, AddSession2Component, AddSessionReactiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
    // , RouterModule.forRoot([
    //   {path:'example', component:ExampleComponent},
    //   {path:'home', component:HomeComponent},
    //   {path:'', component:HomeComponent}
    // ])
    // , MyRouteModule
    , AppRoutingModule, HttpClientModule
  ],
  providers: [DemoService
  , {
    provide:HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,//CustomHttpInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
