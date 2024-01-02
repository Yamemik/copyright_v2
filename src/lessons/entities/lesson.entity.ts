import { CourseEntity } from "src/courses/entities/course.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('courses')
export class LessonEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => CourseEntity, course => course.lessons)
    course: CourseEntity;
}
