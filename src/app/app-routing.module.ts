import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReserveIndexComponent} from './component/reserve-index/reserve-index.component';
import {LoginComponent} from './component/login/login.component';
import {SignupComponent} from './component/signup/signup.component';
import {LoginGuard} from './guard/login.guard';

const routes: Routes = [
  {
    path: '',
    component: ReserveIndexComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
