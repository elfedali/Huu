import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://127.0.0.1:8000/api/';
const httpOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>(API_URL + 'login', { email, password }, httpOptions);
  }

  register(name: string, email: string, password: string) {

    let password_confirmation: string = password

    return this.http.post<any>(API_URL + 'register', { name, email, password, password_confirmation }, httpOptions);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

}
