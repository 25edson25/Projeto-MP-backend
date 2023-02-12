import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  const user: UsuarioEntity = {
    cpf: '54394320235',
    dataNascimento: new Date('2002-02-01'),
    email: 'teste@email.com',
    nome: 'Teste',
    senha: '123456',
  };
  const access_token = {acess_token: 'ejg32352faoinq34f'}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UsuarioService,
          useValue: {
            findByEmail: jest.fn().mockReturnValue(user),
            create: jest.fn().mockReturnValue(user),
          },
        },
        {
          provide: JwtService, useValue: {
            signAsync: jest.fn().mockReturnValue(access_token.acess_token)
          }
        },
        {
          provide: ConfigService, useValue: {
            get: jest.fn().mockReturnValue('secreto')
          }
        }
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should return a acess token object', () => {
    expect(controller.signIn({email: user.email, senha: user.senha})).toEqual(access_token);
  });
});
