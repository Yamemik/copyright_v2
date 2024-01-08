import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';


export class LoginUserDto {
   @ApiProperty()
   email: string;
   @ApiProperty()
   password: string;
}