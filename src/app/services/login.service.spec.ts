import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('Validar serviço de autenticação', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('Usuário e senha válidos', inject([LoginService], (service: LoginService) => {
    expect(service.auth('dotnet', 'SP')).toBeTruthy();
  }));

  it('Usuário ou senha inválido(s)', inject([LoginService], (service: LoginService) => {
    expect(service.auth('dotnet', 'SP2')).toBeFalsy();
  }));

});
