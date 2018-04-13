import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }


  auth(user: string, password: string): boolean {

    if (user == 'dotnet' && password == 'SP') {
      localStorage.setItem('token', '.NET_SP');
      return true;
    } else {
      return false;
    }

  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
