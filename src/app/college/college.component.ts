import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css',
  template:`<p>{{Messagevent}}</p>
   <app-student [parentData]="dataFromParent" (childEvent)="receiveDataFromChild($event)"></app-student>

    <h3>Data received from child:</h3>
    <p>{{ dataFromChild }}</p>`
})
export class CollegeComponent implements OnInit {

  CollegeData :any[]=[];

    NewEntry:{cCollegeCode:string; cCollegeName:string;
  vCollegeAddress:string; cCity:string; cState:string; cZip:string; cPhone :string; }=
  {cCollegeCode:'',cCollegeName:'',vCollegeAddress:'',cCity:'',cState:'',cZip:'',cPhone:''};

    UpdatedEntry:{cCollegeCode:string; cCollegeName:string;
  vCollegeAddress:string; cCity:string; cState:string; cZip:string; cPhone :string; }=
  {cCollegeCode:'',cCollegeName:'',vCollegeAddress:'',cCity:'',cState:'',cZip:'',cPhone:''};

  constructor(private apiservice: ApiService){}





ngOnInit(): void{
  this.fetchCollegedata();
}
fetchCollegedata() : void{
   this.apiservice.GetCollege().subscribe({
    next:(data)=>{
      this.CollegeData=data
      console.log("data fectched for colege",data);
    },
    error:(error)=>
    {
      console.error("Error ocured",error);
    }
  });
}
sendCollegeData():void{
  if(this.NewEntry.cCity&&this.NewEntry.cCollegeCode&&this.NewEntry.cCollegeName&&this.NewEntry.cState
    &&this.NewEntry.cPhone&&this.NewEntry.cZip&&this.NewEntry.vCollegeAddress)
  this.apiservice.postCollege(this.NewEntry).subscribe({
    next:(response)=>{
      this.CollegeData=response
      console.log("data sent",response);
      this.fetchCollegedata();
    },
    error:(error)=>
    {
      console.log(error);
    }
  });
}

putCollegeData():void{
  if(this.NewEntry.cCity&&this.NewEntry.cCollegeCode&&this.NewEntry.cCollegeName&&this.NewEntry.cState
    &&this.NewEntry.cPhone&&this.NewEntry.cZip&&this.NewEntry.vCollegeAddress)
  this.apiservice.postCollege(this.NewEntry).subscribe({
    next:(response)=>{
      this.CollegeData=response
      console.log("data sent",response);
      this.fetchCollegedata();
    },
    error:(error)=>
    {
      console.log(error);
    }
  });
}
deleteCollegeData(id:number): void{
  this.apiservice.deleteCollege(id).subscribe({
    next:(data)=>
    {
this.CollegeData=data
console.log(data)
    }
  })
}


dataFromParent: string = 'Hello from Parent!';
  dataFromChild: string = '';

  // Method to receive data from child
  receiveDataFromChild(childData: string) {
    this.dataFromChild = childData;
}
}