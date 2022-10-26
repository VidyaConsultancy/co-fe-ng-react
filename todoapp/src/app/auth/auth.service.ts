import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { SignupSuccessResponse } from './interfaces/signup-success-response';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.accessToken$ = new BehaviorSubject(localStorage.getItem('accessToken') || '');
  }

  public register(data: User) {
    return this.http.post<SignupSuccessResponse>(`http://localhost:3000/register`, data)
  }

  public login(data: User) {
    return this.http.post<SignupSuccessResponse>(
      `http://localhost:3000/login`,
      data
    );
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken$.next(accessToken)
  }

  public getAccessToken(): Observable<string> {
    return this.accessToken$.asObservable();
  }

  public logout(): void {
    localStorage.clear();
    this.accessToken$.next('');
  }
}
