import { User } from './../../../model/User';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwtService: JwtHelperService = new JwtHelperService;

  constructor(
    private http: HttpClient
  ) { }

  autenticatedUser(user: User)  {
    return this.http.post<User>(`${environment.baseUrl}/login`, user);
  }

  logOut() {
    localStorage.clear();
  }

  sucessLogin(authToken: any) {
    localStorage.setItem('TOKEN_RECCOS', authToken);
  }

  isAutenticated() {
    let token = localStorage.getItem('TOKEN_RECCOS');

    if (token != null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }
}
