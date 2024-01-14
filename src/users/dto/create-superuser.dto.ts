import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../entities/user.entity";


export class CreateSuperUserDto {
   @ApiProperty({ default: 'kuancarlos@mail.ru' })
   email: string;

   @ApiProperty({ default: 9 })
   access_level: Number;

   @ApiProperty({ default: "admin" })
   first_name: string;

   @ApiProperty({ default: "admin" })
   last_name: string;

   @ApiProperty({ default: "admin123" })
   password: string;

   role: UserRole;

}