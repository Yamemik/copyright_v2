import { ApiProperty } from "@nestjs/swagger";
import { CourseEntity } from "src/courses/entities/course.entity";
import { ReactionEntity } from "src/reactions/entities/reaction.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('lessons')
export class LessonEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @Column()
   @ApiProperty()
   title: string;

   @Column()
   @ApiProperty()
   content: string;

   @Column()
   @ApiProperty()
   preview: string;

   @Column({ default: new Date() })
   @ApiProperty()
   date_create: Date;

   @Column({ default: new Date() })
   @ApiProperty()
   date_last_update: Date;

   @Column()
   @ApiProperty()
   complexity: Number;

   @Column()
   @ApiProperty()
   lesson_for_time: string;

   @Column("simple-array", { default: null })
   @ApiProperty()
   homework: string[];

   @OneToMany(() => ReactionEntity, (reaction) => reaction.lesson)
   @ApiProperty()
   reactions: ReactionEntity[];

   @ManyToOne(() => CourseEntity, course => course.lessons)
   @ApiProperty({ type: () => CourseEntity })
   course: CourseEntity;
}
