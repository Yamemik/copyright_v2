import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    name: string;
}
