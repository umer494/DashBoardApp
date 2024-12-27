import { CollegeComponent } from './../college/college.component';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule to enable ngModel
import { Observable } from 'rxjs';



@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  template: `
    <h3>Child Component</h3>
    <p>Data from Parent: {{ parentData }}</p>

    <button (click)="sendDataToParent()">Send Data to Parent</button>
  `

  
})
export class StudentComponent implements OnInit {
  studentData : any[] =[];
constructor(private apiservice: ApiService){}

ngOnInit() : void{
  this.fetchStudentData();
}
fetchStudentData():void{
  this.apiservice.GetStudent().subscribe({
    next:(data)=>
    {
      this.studentData=data;
      console.log("datafetched",data);
    },
    error:(error)=>
    {
      console.error("wrog data",error);
   },
    });
  }
  @Input() Messagevent: string='';
@Output() Meggevent =new EventEmitter<string>();
  sendChildData()
  {
    this.Meggevent.emit("hi");
  }
}
