import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstData() {
    return console.log('clicked data');
  }
  getUsers() {
    console.log(this.http);
    return this.http.get('https://reqres.in/api/users?page=2&dfelay=5');
  }
}
