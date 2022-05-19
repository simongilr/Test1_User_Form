import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface UserArr{
  id: string,
  name: string,
  lastName: string,
  email: string,
  phone: number,
  city: string,
  country: number
}

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private readonly API = environment.api;

  constructor(private http: HttpClient) {}

  addNewUser(body: {}): Observable<UserArr> { 
    return this.http.post<UserArr>(this.API, body);
  }

  getUser(): Observable<UserArr[]> { 
    return this.http.get<UserArr[]>(this.API);
  }
}
