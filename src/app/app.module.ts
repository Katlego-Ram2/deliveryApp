import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { DeliveryGuyComponent } from './delivery/delivery-guy/delivery-guy.component';
import { NgApexchartsModule } from 'ng-apexcharts';


import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { DeliveryDashboardComponent } from './dashboard/delivery-dashboard/delivery-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
// import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CustomerDisplayComponent,
    DeliveryGuyComponent,
    DeliveryDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
