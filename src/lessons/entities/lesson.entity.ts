import { CourseEntity } from "src/courses/entities/course.entity";
import { ReactionEntity } from "src/reactions/entities/reaction.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('lessons')
export class LessonEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	@Column()
	preview: string;

	@Column({ default: new Date() })
	date_create: Date;

	@Column({ default: new Date() })
	date_last_update: Date;

	@Column()
	complexity: Number;

	@Column()
	lesson_for_time: string;

	@Column("simple-array", { default: null })
	homework: string[];

	@OneToMany(() => ReactionEntity, (reaction) => reaction.lesson)
	reactions: ReactionEntity[];

	@ManyToOne(() => CourseEntity, course => course.lessons)
	course: CourseEntity;
}
