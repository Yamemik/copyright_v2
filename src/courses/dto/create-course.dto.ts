import { ApiProperty } from "@nestjs/swagger";


export class CreateCourseDto {
    @ApiProperty({ default: 'name_course' })
    name: string;
}

