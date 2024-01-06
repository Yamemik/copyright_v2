import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({ default: 'mail@mail.ru' })
    mail: string;
    @ApiProperty({ default: 0 })
    access_level: Number;
}