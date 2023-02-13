import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN = 'ADMIN',
  PROFESSOR = 'PROFESSOR',
  ESTUDANTE = 'ESTUDANTE',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.ESTUDANTE)
  .readAny('prova')
  .updateOwn('usuario')
  .grant(AppRoles.PROFESSOR)
  .extend(AppRoles.ESTUDANTE)
  .create('questao')
  .create('prova')
  .readAny('questao')
  .deleteOwn('questao')
  .deleteOwn('prova')
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.PROFESSOR)
  .readAny('usuario')
  .deleteAny('usuario')
  .deleteAny('questao')
  .deleteAny('prova');
