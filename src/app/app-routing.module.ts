import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';


const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },
  



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
