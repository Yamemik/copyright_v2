import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('api/courses')
@ApiTags('courses')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CoursesController {
   constructor(private readonly coursesService: CoursesService) { }

   @Post()
   @ApiOperation({ summary: 'Создать курс' })
   create(@Body() createCourseDto: CreateCourseDto) {
      return this.coursesService.create(createCourseDto);
   }

   @Get()
   @ApiOperation({ summary: 'Получить все курсы' })
   findAll() {
      return this.coursesService.findAll();
   }

   @Get(':id')
   @ApiOperation({ summary: 'Получить курс по id' })
   findOne(@Param('id') id: string) {
      return this.coursesService.findOne(+id);
   }

   @Patch(':id')
   @ApiOperation({ summary: 'Изменить курс по id' })
   update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
      return this.coursesService.update(+id, updateCourseDto);
   }

   @Delete(':id')
   @ApiOperation({ summary: 'Удалить курс по id' })
   remove(@Param('id') id: string) {
      return this.coursesService.remove(+id);
   }
}
