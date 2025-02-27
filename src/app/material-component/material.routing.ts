import { Routes } from '@angular/router';




import { UpdateCustomerComponent } from '../customer/update-customer/update-customer.component';
import { OfficerComponent } from '../indigentOfficer/officer/officer.component';


export const MaterialRoutes: Routes = [
  
  {
    path: 'update',
    component: UpdateCustomerComponent
  },
  {
    path: 'officer',
    component: OfficerComponent
  },

  // {
  //   path:"view", component:ViewComponent
  // }
 
 

 

];
