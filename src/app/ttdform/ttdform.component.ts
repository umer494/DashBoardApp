import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-ttdform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ttdform.component.html',
  styleUrl: './ttdform.component.css'
})
export class TTDFormComponent implements OnInit {

Demodata:any[]=[];
NewEmployee:{id:number}={id:0};
constructor(private apiservice : ApiService) {}

ngOnInit(): void {
    this.FetchData();
}
FetchData():void{
  this.apiservice.DemoGet().subscribe({
    next:(data)=>
    {
      this.Demodata=data
      console.log(data);
    }
  });
}

PostData(): void{
  if(this.NewEmployee.id)
    this.apiservice.DemoPost(this.NewEmployee).subscribe({
  next:(data)=>
  {
    this.Demodata=data
    console.log(data);
  }
  })
}





  user = {
    username: 'Umer bhat',
    email: '',
    age: null,
  };

  model:any={
    usernname:'umer',
    email: '',
    age: null,
  };
  onsubmit(form: any): void{
    console.log('submitted');
  }
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}