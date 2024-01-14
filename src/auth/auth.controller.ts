import { Controller, Request, Post, UseGuards, Patch, Param, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { RegistrationUserDto } from 'src/users/dto/registration-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { LocalAuthGuard } from './local-auth.guard';


@Controller('api/auth')
@ApiTags('auth')
export class AuthController {
   constructor(
      private readonly authService: AuthService,
   ) { }

   @UseGuards(LocalAuthGuard)
   @Post('login')
   @ApiBody({ type: LoginUserDto })
   @ApiOperation({ summary: 'Авторизация' })
   async login(@Request() req) {
      return this.authService.loginUser(req.user as UserEntity);
   }

   @Patch('reg/:id')
   @ApiOperation({ summary: 'Регистрация' })
   async reg(@Param('id') id: string, @Body() registrationUserDto: RegistrationUserDto) {
      return this.authService.registerUser(+id, registrationUserDto);
   }
}
