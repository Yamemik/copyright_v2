import { LessonEntity } from "src/lessons/entities/lesson.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => LessonEntity, lesson => lesson.course)
    lessons: LessonEntity[];
}
