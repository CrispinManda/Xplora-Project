import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../services/tour-service.service';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
onVisitNowClick(_t12: any) {
throw new Error('Method not implemented.');
}
  tours: any[] = [];

  constructor(private tourService: TourServiceService) {}

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours() {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    if (!token) {
      console.error('Authentication token not found.');
      // Handle missing token as needed (e.g., redirect to login page)
      return;
    }

    this.tourService.getAllTours(token)
      .then((data) => {
        this.tours = data;
        console.log(data);
        
      })
      .catch((error) => {
        console.error('Error fetching tours:', error);
        // Handle error as needed
      });
  }
}
