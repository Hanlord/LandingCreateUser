import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateFormComponent } from './create-form/create-form.component';


const routes: Routes = [{
  path:"",component: HomePageComponent,
  },{
  path:"create-form", component: CreateFormComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
