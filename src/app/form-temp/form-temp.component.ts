import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ApiService } from '../api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-form-temp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-temp.component.html',
  styleUrl: './form-temp.component.css',
  template:`<p>{{data.name}}</p>
  `
})
export class FormTempComponent implements OnInit {
constructor(private apiservice: ApiService){}
addData:{id:number;Name:string}={id:0,Name:''};
UpdateData:{id:string;Name:string}={id:'',Name:''};
  FetchData:any[]=[];
ngOnInit(): void {
    this.GetData();
}
GetData():void{
  this.apiservice.DemoGet().subscribe({
    next:(data)=>
    {
      this.FetchData=data
      console.log(data);
    }
  });
}
postData():void{
  if(this.addData.Name&&this.addData.id)
    this.apiservice.DemoPost(this.addData).subscribe({
  })
  
  
}
  data:any={
    Name:'',
    City:'',
    Age:null,
    Phone:null,
  };
OnSubmit(form:any):void{
  if(this.data==null)
  {
  console.log("form submtted falied",this.data);
  }
  else{
     console.log("form submtted ",this.data);
  }
}
}
