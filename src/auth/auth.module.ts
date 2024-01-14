import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';


@Module({
   imports: [
      JwtModule.registerAsync({
         imports: [ConfigModule],
         inject: [ConfigService],
         useFactory: async (configService: ConfigService) => {
            return {
               secret: configService.get('JWT_SECRET_KEY'),
               signOptions: { expiresIn: configService.get('JWT_ESPIRES_IN') },
            }
         }
      }),
      UsersModule, PassportModule
   ],
   controllers: [AuthController],
   providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
