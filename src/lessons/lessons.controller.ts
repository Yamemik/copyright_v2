import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('api/lessons')
@ApiTags('lessons')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class LessonsController {
   constructor(private readonly lessonsService: LessonsService) { }

   @Post()
   @ApiOperation({ summary: 'Создать урок' })
   async create(@Body() createLessonDto: CreateLessonDto) {
      return this.lessonsService.create(createLessonDto);
   }

   @Get()
   @ApiOperation({ summary: 'Получить все уроки' })
   async findAll() {
      return this.lessonsService.findAll();
   }

   @Get('course/:course_id')
   @ApiOperation({ summary: 'Получить все уроки одного курса' })
   async findAllByCours(@Param('course_id') course_id: string) {
      return this.lessonsService.findAllByCours(+course_id);
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.lessonsService.findOne(+id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
      return this.lessonsService.update(+id, updateLessonDto);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.lessonsService.remove(+id);
   }
}
