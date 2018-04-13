import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';

describe('Validação de login', () => {

  let component: LoginComponent;
  let service: LoginService;

  beforeEach(() => {
    service = new LoginService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });


  it('Validar se o usuário não está autenticado', () => {
    localStorage.removeItem('token');
    expect(component.LogIn()).toBeFalsy();
  });

  it('Validar se o usuário está autenticado', () => {
    localStorage.setItem('token', '.NETSP');
    expect(component.LogIn()).toBeTruthy();
  });


});
