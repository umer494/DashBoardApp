import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplyee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emplyee.component.html',
  styleUrl: './emplyee.component.css'
})
export class EmplyeeComponent implements OnInit {
employees: any[] = [];
  newEmployee = {
    EmployeeId: 0,
    EmployeeName: '',
    Description: '',
  };
  updatedEmployee = {
    EmployeeId: 0,
    EmployeeName: '',
    Description: '',
  };
   constructor(private apiservice: ApiService) {}
ngOnInit(): void {
    
    this.fetchEmployees();
  }
// Employee APIs
  fetchEmployees(): void {
    this.apiservice.GetEmployee().subscribe({
      next: (data) => {
        this.employees = data;
        console.log('Employee data fetched:', data);
      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      },
    });
  }

  addEmployee(): void {
    if (this.newEmployee.EmployeeName && this.newEmployee.Description) {
      this.apiservice.PostEmployee(this.newEmployee).subscribe({
        next: (response) => {
          console.log('Employee added:', response);
          this.fetchEmployees(); // Refresh the employee list
          this.newEmployee = { EmployeeId: 0, EmployeeName: '', Description: '' };
        },
        error: (error) => {
          console.error('Error adding employee:', error);
        },
      });
    }
  }

  updateEmployee(): void {
    if (this.updatedEmployee.EmployeeId) {
      this.apiservice.putEmployee(this.updatedEmployee).subscribe({
        next: (response) => {
          console.log('Employee updated:', response);
          this.fetchEmployees(); // Refresh the employee list
        },
        error: (error) => {
          console.error('Error updating employee:', error);
        },
      });
    }
  }

  deleteEmployee(id: number): void {
    this.apiservice.DeleteEmployee(id).subscribe({
      next: (response) => {
        console.log('Employee deleted:', response);
        this.fetchEmployees(); // Refresh the employee list
      },
      error: (error) => {
        console.error('Error deleting employee:', error);
      },
    });
  }
}
