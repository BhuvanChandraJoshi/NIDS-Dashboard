import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getToken(): string | null {
    // return localStorage.getItem('authToken');
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTUzNTA4LCJpYXQiOjE3MTQ0NjcxMDgsImp0aSI6IjU5NzhjZThlNTU0NDRhN2NhYmVjMDcxNmYwZGU3NDA3IiwidXNlcl9pZCI6MX0.x8VmM5qd0yGF3Qb3FcpMoR-TV25My1QKdwehIYIuSrE";
  }

}
