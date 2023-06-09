import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ManagerComponent } from './layouts/manager/manager.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent, 
    children:[
      {path:'', redirectTo:'index', pathMatch:'full'},
      {path:'index', component:HomeComponent},
    ]

  }, 
  {
    path:'', 
    component:ManagerComponent, 
    children:[
      {path:'', redirectTo:'manager', pathMatch:'full'},
      {path:'manager', component: ManagerComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
