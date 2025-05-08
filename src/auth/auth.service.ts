import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      throw new UnauthorizedException();
    }

    const access_token = await this.createAccessToken({
      sub: user.id,
      email: user.email,
    });

    return { access_token };
  }

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;
    const user = await this.usersService.findByEmail(email);
    if (user) {
      throw new ConflictException();
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.create({
      ...signUpDto,
      password: hashedPassword,
    });
    const access_token = await this.createAccessToken({
      sub: newUser.id,
      email: newUser.email,
    });

    return { access_token };
  }

  async createAccessToken(payload: Record<string, string>) {
    return this.jwtService.signAsync(payload);
  }
}
