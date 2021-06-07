import { Country } from './models/Country';
import { User } from './models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getUserCountries() {
    return this.http.get<Country[]>('http://localhost:3000/countries')
  }
}
