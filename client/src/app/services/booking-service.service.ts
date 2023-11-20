import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateBooking, UpdateBooking } from '../interfaces/bookingInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  private apiUrl = 'http://localhost:4000/booking';

  constructor(private http: HttpClient) {}

  createBooking(bookingDetails: CreateBooking, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token,
    });

    return this.http.post<any>(`${this.apiUrl}/`, bookingDetails, { headers });
  }
}

