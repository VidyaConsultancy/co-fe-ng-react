import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { SignupSuccessResponse } from './interfaces/signup-success-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: User) {
    return this.http.post<SignupSuccessResponse>(`http://localhost:3000/register`, data)
  }
}
