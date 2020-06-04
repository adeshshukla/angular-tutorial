import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './components/home.component';
import { ParamComponent } from './second/param.component';
import { ThirdComponent } from './components/third/third.component';
import { QueryComponent } from './second/query.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SessionlistComponent } from './components/sessionlist/sessionlist.component';
import { TemplateReferenceComponent } from './example/template-reference/template-reference.component';
import { SecureHomeComponent } from './components/secure-home/secure-home.component';
import { PublicMasterComponent } from './public-master/public-master.component';
import { DashboardComponent } from './components/secure-home/dashboard/dashboard.component';

const routes: Routes = [

  // Secure routes
  {
    path: 'portal', component: SecureHomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'studList', component: StudentlistComponent },
      { path: 'studentDetail/:rollNo', component: StudentDetailComponent },
      { path: 'sessionList', component: SessionlistComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  {
    path: '', component: PublicMasterComponent, children: [
      { path: 'example', component: ExampleComponent },
      { path: 'example2', redirectTo: '/example', pathMatch: 'full' }, // prefix or full
      { path: 'paramEx/:id/:name', component: ParamComponent },
      { path: 'queryEx', component: QueryComponent },
      { path: 'third', component: ThirdComponent },
      { path: 'home', component: HomeComponent, },
      { path: 'templateRef', component: TemplateReferenceComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
  },

  { path: '**', component: PageNotFOundComponent },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
