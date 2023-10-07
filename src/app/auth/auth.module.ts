import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:AuthComponent,

    children:[
      {
        path:'',
        redirectTo:"login",
        pathMatch:"full",
      },

      {
        path:"login",
        component:LoginComponent,
      }

    ]
  }
]


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class AuthModule {}
