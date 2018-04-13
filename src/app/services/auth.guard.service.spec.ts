import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";

describe('Validando se o usuário está autenticado', () => {


  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });

  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('Usuário está autenticado', inject([AuthGuard], (service: AuthGuard) => {
    localStorage.setItem('token', '.NETSP');
    expect(service.canActivate(route, state)).toBeTruthy();
  }));

  it('Usuário não está autenticado', inject([AuthGuard], (service: AuthGuard) => {
    expect(service.canActivate(route, state)).toBeFalsy();
  }));
});
