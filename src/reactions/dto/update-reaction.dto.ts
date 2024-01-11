import { ApiProperty } from '@nestjs/swagger';
import { EnumReaction } from '../entities/reaction.entity';


export class UpdateReactionDto {
   @ApiProperty()
   reaction: EnumReaction;
}