import { ApiProperty } from "@nestjs/swagger";


export class CreateCourseDto {
    @ApiProperty({ default: 'title_course' })
    title: string;
}

