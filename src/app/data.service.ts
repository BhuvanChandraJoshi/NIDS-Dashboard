import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('Authentication token not found');
    }

    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`,
    });

    let data = this.http.get<any>('http://127.0.0.1:8000/nids/packet/all', { headers });
    console.log(data);
    return data;
  }
}
