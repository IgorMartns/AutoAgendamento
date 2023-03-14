import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent, 
    children:[
      {path:'', redirectTo:'index', pathMatch:'full'},
      {path:'index', component:HomeComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
