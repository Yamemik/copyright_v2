import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';


export class RegistrationUserDto {
   @ApiProperty()
   first_name: string;
   @ApiProperty()
   last_name: string;
   @ApiProperty()
   password: string;
   role: UserRole;
}