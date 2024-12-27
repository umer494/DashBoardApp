import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideRouter } from '@angular/router';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { TTDFormComponent } from './ttdform/ttdform.component';
import { FormTempComponent } from './form-temp/form-temp.component';




export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to Dashboard on load
  { path: 'dashboard', component: DashboardComponent },
  { path: 'emplyee', component: EmplyeeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'tddform', component: TTDFormComponent },
  {path:'form-temp',component:FormTempComponent}
];

