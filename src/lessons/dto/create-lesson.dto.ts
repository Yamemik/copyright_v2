import { ApiProperty } from "@nestjs/swagger";
import { CourseEntity } from "src/courses/entities/course.entity";

export class CreateLessonDto {
	@ApiProperty({ default: "title_lesson" })
	title: string;
	@ApiProperty({ default: "content_lesson" })
	content: string;
	@ApiProperty({ default: "preview_lesson" })
	preview: string;
	@ApiProperty({ default: 0 })
	complexity: Number;
	@ApiProperty({ default: "5m" })
	lesson_for_time: string;
	@ApiProperty()
	homework: string[];
	@ApiProperty()
	course: CourseEntity;
}
