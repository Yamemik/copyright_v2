import { ApiProperty } from "@nestjs/swagger";
import { EnumReaction } from "../entities/reaction.entity";
import { LessonEntity } from "src/lessons/entities/lesson.entity";
import { UserEntity } from "src/users/entities/user.entity";


export class CreateReactionDto {
   @ApiProperty()
   reaction: EnumReaction;
   @ApiProperty()
   lesson: LessonEntity;
   @ApiProperty()
   user: UserEntity;
}