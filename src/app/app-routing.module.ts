import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GuardService } from './guard.service' 

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent,
    canActivate: [GuardService],
    children: [
      {path:"", redirectTo: 'main', pathMatch:'full'},
      {path:"**", component:NotfoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
