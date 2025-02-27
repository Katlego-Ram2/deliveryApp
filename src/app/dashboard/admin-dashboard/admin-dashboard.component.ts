import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  deliveryPersons = [
    { name: 'John Doe', parcels: 5, completed: 3, pending: 2, message: 'Traffic delay on Route 7' },
    { name: 'Jane Smith', parcels: 4, completed: 4, pending: 0, message: '' },
    { name: 'David Lee', parcels: 6, completed: 2, pending: 4, message: 'Vehicle issue, delay expected' }
  ];

  allocateParcel(personIndex: number) {
    this.deliveryPersons[personIndex].parcels++;
    this.deliveryPersons[personIndex].pending++;
  }
}
