import { Component } from '@angular/core';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent {

  constructor(private bookingService: BookingServiceService) {}

  onVisitNowClick(tour: any) {
    const bookingData = {
      tour_id: tour.tour_id,
      user_id: 'user.user_id',
      count: 5,
      total_price: 800,
      start_date: new Date('2023-12-11'), // use the appropriate format for your date
      end_date: new Date('2023-12-11'), // use the appropriate format for your date
    };
    const token = 'token';

    this.bookingService.createBooking(bookingData, token).subscribe(
      (response) => {
        
        console.log('Booking successful:', response);
      },
      (error) => {
       
        console.error('Booking error:', error);
      }
    );
  }
}