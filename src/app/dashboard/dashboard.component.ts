import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule to enable ngModel
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule to the imports array
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardData: any[] = [];  // Array to hold the dashboard data


  newEntry: { title: string; value: number; description: string } = { title: '', value: 0, description: '' };
  updatedEntry: { id: number; title: string; value: number; description: string } = { id: 0, title: '', value: 0, description: '' };

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.fetchDashboardData(); // Fetch data on component load
   
  }


  // GET method: Fetch dashboard data
  fetchDashboardData(): void {
    this.apiservice.getDashboard().subscribe({
      next: (data) => {
        this.dashboardData = data;  // Populate the data array
        console.log('Fetched data:', data);
      },
      error: (error) => {
        console.error('Error while fetching data', error);
      },
    });
  }

  // POST method: Add a new entry
  addNewEntry(): void {
    if (this.newEntry.title && this.newEntry.value && this.newEntry.description) {
      this.apiservice.postDashboard(this.newEntry).subscribe({
        next: (response) => {
          console.log('Data added successfully:', response);
          this.fetchDashboardData();  // Refresh data after POST
        },
        error: (error) => {
          console.error('Error while adding data:', error);
        },
      });
    } else {
      console.error('Invalid input: All fields are required');
    }
  }

  // PUT method: Update an existing entry
  updateEntry(): void {
    if (this.updatedEntry.id && this.updatedEntry.title && this.updatedEntry.value && this.updatedEntry.description) {
      this.apiservice.putDashboard(this.updatedEntry).subscribe({
        next: (response) => {
          console.log('Data updated successfully:', response);
          this.fetchDashboardData();  // Refresh data after PUT
        },
        error: (error) => {
          console.error('Error while updating data:', error);
        },
      });
    } else {
      console.error('Invalid input: ID, Title, Value, and Description are required');
    }
  }

  // DELETE method: Delete an entry by ID
  deleteEntry(id: number): void {
    this.apiservice.deleteDashboard(id).subscribe({
      next: (response) => {
        console.log('Data deleted successfully:', response);
        this.fetchDashboardData();  // Refresh data after DELETE
      },
      error: (error) => {
        console.error('Error while deleting data:', error);
      },
    });
  }

  // Method to populate the update form with the selected entry data
  populateUpdateForm(item: any): void {
    this.updatedEntry.id = item.id;
    this.updatedEntry.title = item.title;
    this.updatedEntry.value = item.value;
    this.updatedEntry.description = item.description;
  }
}
