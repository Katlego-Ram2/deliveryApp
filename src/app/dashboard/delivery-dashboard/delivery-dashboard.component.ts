import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrl: './delivery-dashboard.component.scss'
})
export class DeliveryDashboardComponent {
  deliveries = [
    { id: 'ORD123', customer: 'John Doe', status: 'In Transit', eta: '15 min' },
    { id: 'ORD124', customer: 'Jane Smith', status: 'Pending Pickup', eta: 'N/A' },
    { id: 'ORD125', customer: 'David Lee', status: 'Delivered', eta: 'Completed' }
  ];

  notifications = [
    'New delivery assigned: #ORD126',
    'Traffic alert: Delays on Main St.',
    'Customer John Doe updated delivery location.'
  ];

  earnings = 2450;
  completedDeliveries = 52;
  pendingDeliveries = 8;
  totalOrders = 125;
  processingOrders = 86;
  deliveriesToday = 94;
  arrivalsToday = 27;
} 

