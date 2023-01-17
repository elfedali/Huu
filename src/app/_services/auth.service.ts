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

  register(username: string, email: string, password: string) {
    return this.http.post<any>(API_URL + 'register', { username, email, password }, httpOptions);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

}
