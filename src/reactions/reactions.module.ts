import { Module } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { ReactionsController } from './reactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReactionEntity } from './entities/reaction.entity';


@Module({
  controllers: [ReactionsController],
  providers: [ReactionsService],
  imports: [
    TypeOrmModule.forFeature([ReactionEntity]),
  ],
})
export class ReactionsModule { }
