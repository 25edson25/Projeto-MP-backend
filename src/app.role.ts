import { read } from "fs";
import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
    ADMIN = 'ADMIN',
    PROFESSOR = 'PROFESSOR',
    ESTUDANTE = 'ESTUDANTE'
  }
  
  export const roles: RolesBuilder = new RolesBuilder();
  
  roles
    .grant(AppRoles.ESTUDANTE)
        .readOwn('prova')
    .grant(AppRoles.PROFESSOR)
        .create('questao')
        .create('prova')
        .readAny('questao')
        .readAny('prova')
      .extend(AppRoles.ESTUDANTE)
    .grant(AppRoles.ADMIN)
        .extend(AppRoles.PROFESSOR)