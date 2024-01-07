import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({ default: 'kuancarlos@mail.ru' })
    email: string;
    @ApiProperty({ default: 0 })
    access_level: Number;
}