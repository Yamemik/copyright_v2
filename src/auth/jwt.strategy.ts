import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor(private readonly userService: UsersService, private jwtService: JwtService) {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: process.env.JWT_SECRET_KEY,

      });
   }

   async validate(payload: any) {
      const user = await this.userService.findOne(+payload.id);

      if (!user) {
         throw new UnauthorizedException("У вас нет доступа");
      }

      return {
         id: user.id,
      };
   }

   async login(user: UserEntity) {
      const payload = { id: user.id }

      return {
         toren: this.jwtService.sign(payload)
      }
   }
}