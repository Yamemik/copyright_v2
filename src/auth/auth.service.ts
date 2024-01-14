import { ForbiddenException, Injectable } from '@nestjs/common';
import { RegistrationUserDto } from 'src/users/dto/registration-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';


@Injectable()
export class AuthService {
   constructor(private usersService: UsersService, private jwtService: JwtService) { }

   async validateUser(email: string, pass: string): Promise<any> {
      const user = await this.usersService.findOneByEmail(email);
      if (user && await bcrypt.compare(pass, user.password)) {
         const { password, ...result } = user;
         return result;
      }
      return null;
   }

   async registerUser(id: number, registrationUserDto: RegistrationUserDto) {
      try {
         const userData = await this.usersService.registrationUser(id, registrationUserDto);

         return {
            token: this.jwtService.sign({ id })
         };
      }
      catch (err) {
         console.log(err);
         throw new ForbiddenException("Ошибка при регистрации");
      }
   }

   async loginUser(user: UserEntity) {
      return {
         token: this.jwtService.sign({ id: user.id })
      }
   }
}