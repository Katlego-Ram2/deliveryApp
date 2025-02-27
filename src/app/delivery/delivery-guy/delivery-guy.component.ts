import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-delivery-guy',
  templateUrl: './delivery-guy.component.html',
  styleUrl: './delivery-guy.component.scss'
})
export class DeliveryGuyComponent {
  parcelCode: string = '';
  parcelLoaded: boolean = false;
  parcelDetails: any = {};
  
  deliveryInfo = {
    name: '',
    contact: '',
    message: '',
    location: ''
  };

  // Simulate loading parcel details from backend
  loadParcelDetails(): void {
    if (this.parcelCode.trim()) {
      // Replace this simulated data with an API call in a real app.
      this.parcelDetails = {
        status: 'In Transit',
        arrivalDate: 'March 1, 2025',
        arrivalTime: '4:30 PM',
        customerName: 'Jane Smith',
        customerAddress: '123 Main Street, Cityville',
        customerContact: '(555) 123-4567'
      };
      this.parcelLoaded = true;
    } else {
      alert('Please enter a valid parcel code.');
    }
  }

  // Simulate getting current location
  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.deliveryInfo.location = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        },
        (error) => {
          alert('Error retrieving location. Please try again.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  // Simulate submitting the delivery update
  submitDeliveryUpdate(): void {
    // Normally, you'd send deliveryInfo and parcelCode to your backend here.
    console.log('Delivery update submitted:', this.deliveryInfo, 'for parcel:', this.parcelCode);
    alert('Delivery update submitted successfully!');
    // Optionally reset the form or navigate to a confirmation page.
  }
}

