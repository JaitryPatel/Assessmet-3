import { Injectable } from '@angular/core';
import { datamodel } from './list/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  addemployee(data: datamodel) {
    // debugger
    return this.http.post<datamodel>(" http://localhost:3000/Users", data)
    // debugger
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://localhost:3000/Users");
  }

  //delete 
  deleteemployee(id:number){
    return this.http.delete<datamodel[]>("http://localhost:3000/Users/" +id);
  }

  //Fetch
  fetchdata(id: number){
    return this.http.get<datamodel>("http://localhost:3000/Users/"+id)
  }

  //Update
  updateemployee(data: datamodel, id: number){
    return this.http.put<datamodel>("http://localhost:3000/Users/"+id, data);
  }
}
