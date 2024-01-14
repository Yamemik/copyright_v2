import { ApiProperty } from "@nestjs/swagger";
import { CourseEntity } from "src/courses/entities/course.entity";
import { LessonEntity } from "src/lessons/entities/lesson.entity";
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('advances')
export class AdvanceEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: Number;

   @ManyToMany(() => CourseEntity)
   @JoinTable()
   @ApiProperty({ type: () => CourseEntity })
   courses_in_progress: CourseEntity[];

   @ManyToMany(() => CourseEntity)
   @JoinTable()
   @ApiProperty({ type: () => CourseEntity })
   courses_is_completed: CourseEntity[];

   @ManyToMany(() => LessonEntity)
   @JoinTable()
   @ApiProperty({ type: () => LessonEntity })
   lessons_is_completed: LessonEntity[];
}
