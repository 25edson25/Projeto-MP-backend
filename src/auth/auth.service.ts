import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "../usuario/usuario.service";
import { SignInDto } from "./dto/sign-in.dto";
import { SignUpDto } from "./dto/sign-up.dto";


@Injectable()
export class AuthService {
    constructor(
        private userService: UsuarioService,
        private jwtService: JwtService,
        private config: ConfigService
    ) {}

    private async generateToken(cpf: string) {
        const payload = { cpf };
        const token = await this.jwtService.signAsync(payload, {
            expiresIn: "30m",
            secret: this.config.get("JWT_SECRET"),
        });

        return token;
    }
    async signIn(signInDto: SignInDto) {
        const user = await this.userService.findByEmail(signInDto.email)

        if (user.senha != signInDto.senha)
            throw new UnauthorizedException('incorrect password')
        return {
            access_token: await this.generateToken(user.cpf),
        };
    }
    async signUp(createUserDto: SignUpDto) {
        const user = await this.userService.create({...createUserDto, roles:{connect:[{id:createUserDto.roles}]}})

        return {
            user,
            access_token: await this.generateToken(user.cpf),
        };
    }
}
