import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from "./login-container/login-container.component";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
