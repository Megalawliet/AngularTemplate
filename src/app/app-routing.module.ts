import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './Login/forgot/forgot.component';
import { LoginComponent } from './Login/login/login.component';
import { RegistrarseComponent } from './Login/registrarse/registrarse.component';
import { MainComponent } from './Main/main/main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login',component:LoginComponent},
  {path: 'login/forgot', component:ForgotComponent},
  {path: 'login/registrarse', component:RegistrarseComponent},
  {path: 'main', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
