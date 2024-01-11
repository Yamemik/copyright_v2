import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateCourseDto extends PartialType(CreateCourseDto) {
   @ApiProperty({ default: 'new_title_course' })
   title: string;
}
