import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrl: './delivery-dashboard.component.scss'
})
export class DeliveryDashboardComponent {
  drivers = [
    { id: 1, name: 'Driver A' },
    { id: 2, name: 'Driver B' },
    { id: 3, name: 'Driver C' },
    { id: 4, name: 'Driver D' },
    // More drivers...
  ];

  parcels = [
    { id: 1, name: 'Parcel X', selectedDriver: null, comment: '' },
    { id: 2, name: 'Parcel Y', selectedDriver: null, comment: '' },
    { id: 3, name: 'Parcel Z', selectedDriver: null, comment: '' },
    { id: 4, name: 'Parcel A', selectedDriver: null, comment: '' },
    { id: 5, name: 'Parcel B', selectedDriver: null, comment: '' },
    { id: 6, name: 'Parcel C', selectedDriver: null, comment: '' },
    // More parcels...
  ];

  itemsPerPage = 5;
  currentPage = 1;
  totalPages = Math.ceil(this.parcels.length / this.itemsPerPage);

  get paginatedParcels() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.parcels.slice(start, end);
  }

  changePage(direction: string) {
    if (direction === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }
  }

  allocateParcel(parcel: any) {
    console.log(`Allocating ${parcel.name} to ${parcel.selectedDriver}`);
  }

  reallocateParcel(parcel: any) {
    console.log(`Reallocating ${parcel.name} to ${parcel.selectedDriver}`);
  }
} 

