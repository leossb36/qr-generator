import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({ usernameField: 'email' });
  }

  async validate() {
    const user = { id: '123', email: 'teste@teste.com' };

    if (!user) throw new UnauthorizedException('Invalid e-mail or password');

    return user;
  }
}
