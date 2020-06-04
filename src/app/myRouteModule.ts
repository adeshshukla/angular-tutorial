import { NgModule } from "@angular/core";
import {Router, RouterModule} from '@angular/router';

import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './components/home.component';

@NgModule({
    imports:[     RouterModule.forRoot([
        {path:'example', component:ExampleComponent},
        {path:'home', component:HomeComponent},
        {path:'', component:HomeComponent}
      ])],
    exports:[RouterModule]
})
export class MyRouteModule{    
}