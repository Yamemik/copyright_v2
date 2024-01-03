import { ApiProperty } from "@nestjs/swagger";
import { UserAccessLevel } from "../entities/user.entity";


export class CreateUserDto {
    @ApiProperty({ default: 'mail@mail.ru' })
    mail: string;
    @ApiProperty({
        type: "enum",
        enum: UserAccessLevel,
        default: UserAccessLevel.LVL0,
    })
    access_level: UserAccessLevel;
}