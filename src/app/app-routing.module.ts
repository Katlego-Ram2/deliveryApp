import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { DeliveryGuyComponent } from './delivery/delivery-guy/delivery-guy.component';
import { DeliveryDashboardComponent } from './dashboard/delivery-dashboard/delivery-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '',pathMatch:'full', component: WelcomePageComponent  },
  // { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'register', component: RegisterComponent },
   // Registration page route
  { path: 'login', component: LoginComponent },          // Login page route
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: 'delivery', component: CustomerDisplayComponent },
  { path: 'delivery-dashboard', component: DeliveryDashboardComponent } ,
  { path: 'admin-dashboard', component: AdminDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
