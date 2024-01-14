import { ApiProperty } from "@nestjs/swagger";
import { LessonEntity } from "src/lessons/entities/lesson.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('courses')
export class CourseEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @Column()
   @ApiProperty()
   title: string;

   @OneToMany(() => LessonEntity, lesson => lesson.course)
   @ApiProperty()
   lessons: LessonEntity[];
}
