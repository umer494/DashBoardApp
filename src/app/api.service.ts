import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available globally
})
export class ApiService {
  private apiUrl = 'https://localhost:7174/api/Dashboard'; // Replace with your actual API URL
private EmployeeUrl = 'https://localhost:7174/api/Employee';
private StudentUrl='https://localhost:7174/api/Student';
private CollegeUrl='https://localhost:7174/api/College';
private DemoUrl='https://localhost:7174/api/Demo';

//constructor injecting http from httpclient
  constructor(private http: HttpClient) {}

  // GET method: Fetch dashboard data
  getDashboard(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // POST method: Add a new dashboard entry
  postDashboard(entry: { title: string; value: number; description: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, entry);
  }

  // PUT method: Update an existing dashboard entry
  putDashboard(entry: { id: number; title: string; value: number; description: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${entry.id}`, entry);
  }

  // DELETE method: Delete a dashboard entry by ID
  deleteDashboard(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

    //Get Method for Employee
GetEmployee() : Observable<any>{
  return this.http.get<any>(this.EmployeeUrl);
}
  //Postemployee
  PostEmployee(entryData: {EmployeeId : number; EmployeeName:String; Description:string}): Observable<any>{
    return this.http.post<any>(this.EmployeeUrl,entryData);
  }
putEmployee(Updatedata :{EmployeeId : number; EmployeeName:String; Description:string}): Observable<any>
{
return this.http.put<any>(`${this.EmployeeUrl}/${Updatedata.EmployeeId}`,Updatedata);
}
DeleteEmployee(EmployeeId: number) : Observable<any>{
  return this.http.delete<any>(`${this.EmployeeUrl}/${EmployeeId}`);
}

//GetStudentData
GetStudent() : Observable<any>{
  return this.http.get<any>(this.StudentUrl);
}
postStudent(newstd:{StudentId:Number;Studentname:string;Branch:string}) :Observable<any>{
  return this.http.post<any>(this.StudentUrl,newstd);
}
putStudent(Updstd:{StudentId:Number;StudentName:string;Branch:string}) :Observable<any>{
  return this.http.put<any>(`${this.EmployeeUrl}/${Updstd.StudentId}`,Updstd);
}
deleteStd(StudentId: number) :Observable<any>{
 return this.http.delete<any>(`${this.EmployeeUrl}/${StudentId}`);
}
//CollegeDatap
GetCollege() :Observable<any>{
  return this.http.get(this.CollegeUrl);
}
postCollege(newCollege:{cCollegeCode:string; cCollegeName:string;
  vCollegeAddress:string; cCity:string; cState:string; cZip:string; cPhone :string; }) :Observable<any>{
  return this.http.post<any>(this.CollegeUrl,newCollege);
  }
putCollege(newColleg:{cCollegeCode:string; cCollegeName:string;
  vCollegeAddress:string; cCity:string; cState:string; cZip:string; cPhone :string; }) :Observable<any>{
    return this.http.put <any>(`${this.CollegeUrl}/${newColleg.cCollegeCode}`,newColleg)
  }
  deleteCollege(id: number):Observable<any>
  {
return this.http.delete<any>(`${this.CollegeUrl}/${id}`);
  }

DemoGet(): Observable<any>
{
  return this.http.get<any>(this.DemoUrl);
}
 DemoPost(newEntry:{id:number}):Observable<any>
 {
  return this.http.post<any>(this.DemoUrl,newEntry);
 }
  DemoPut(newEntry:{id:number}):Observable<any>
 {
  return this.http.post<any>(`${this.DemoUrl}/${newEntry.id}`,newEntry);
}
Demodelete(id:number):Observable<any>{
  return this.http.delete<any>(`${this.DemoUrl}/${id}`)
}
}

