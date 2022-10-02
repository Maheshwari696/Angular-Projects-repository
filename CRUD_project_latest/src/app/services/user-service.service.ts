import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = "https://jsonplaceholder.cypress.io";
  constructor(private http: HttpClient) { }
  listuser() {
    return this.http.get(this.baseUrl + '/users');
  }
  viewuser(id: string) {
    return this.http.get(this.baseUrl + '/users/' + id);
  }

  addUser(obj: any) {
    return this.http.post(this.baseUrl + '/users/', obj)
  }
  deleteuser(id: any) {
    return this.http.delete(this.baseUrl + '/users/'+id)
  }

}
