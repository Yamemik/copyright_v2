import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('api/reactions')
@ApiTags('reactions')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ReactionsController {
   constructor(private readonly reactionsService: ReactionsService) { }

   @Post()
   @ApiOperation({ summary: 'Создать реакцию' })
   async create(@Body() createReactionDto: CreateReactionDto) {
      return this.reactionsService.create(createReactionDto);
   }

   @Get('lesson/:lesson_id')
   @ApiOperation({ summary: 'Получить все реакции для урока' })
   async findAllByLesson(@Param('lesson_id') lesson_id: string,) {
      return this.reactionsService.findAllByLesson(+lesson_id);
   }

   @Patch(':id')
   async update(
      @Param('lesson_id') lesson_id: string,
      @Param('user_id') user_id: string,
      @Body() updateReactionDto: UpdateReactionDto) {
      return this.reactionsService.update(+lesson_id, +user_id, updateReactionDto);
   }
}
