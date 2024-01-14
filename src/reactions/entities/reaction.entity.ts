import { ApiProperty } from "@nestjs/swagger";
import { LessonEntity } from "src/lessons/entities/lesson.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export enum EnumReaction {
   POSITIVE = "positive",
   NEGATIVE = "negative",
   NEUTRAL = "neutral",
}

@Entity('reactions')
export class ReactionEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @Column({
      type: "enum",
      enum: EnumReaction,
   })
   @ApiProperty()
   reaction: EnumReaction;

   @ManyToOne(() => LessonEntity, lesson => lesson.reactions)
   @ApiProperty({ type: () => LessonEntity })
   lesson: LessonEntity;

   @ManyToOne(() => UserEntity, user => user.reactions)
   @ApiProperty({ type: () => UserEntity })
   user: UserEntity;
}
