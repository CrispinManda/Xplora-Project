import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var flatpickr: any;

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent implements AfterViewInit {
  createTourForm: FormGroup = this.fb.group({
    tour_name: ['', Validators.required],
    tour_description: ['', Validators.required],
    tour_img: ['', Validators.required],
    price: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngAfterViewInit(): void {
    flatpickr('.datepicker', {
      dateFormat: 'Y-m-d',
      // Additional configuration options for Flatpickr
    });
  }

  submitForm() {
    if (this.createTourForm.valid) {
      const token = localStorage.getItem('token') as string; // Replace with your actual token
      console.log  (token);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token,  // Assuming 'Bearer' is needed before the actual token
      });
      
      console.log('Request Headers:', headers);
      

      const tourData = this.createTourForm.value;

      this.http.post('http://localhost:4000/tour/', tourData, { headers })
        .subscribe(
          (response) => {
            console.log('Tour created successfully:', response);
            // Add any additional logic or redirect the user after successful submission
          },
          (error) => {
            console.error('Error creating tour:', error);
            // Handle error as needed
          }
        );
    } else {
      // Form is invalid, handle validation errors or display a message
    }
  }
}
