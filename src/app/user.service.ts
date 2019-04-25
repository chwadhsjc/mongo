import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/quinnox/';
	//private userUrl = '/api';

  public getUsers() {
   
    return this.http.get("http://localhost:8080/quinnox/");
  }

  public getRecords(data) {
   return this.http.get(this.userUrl + data );
  }
}
