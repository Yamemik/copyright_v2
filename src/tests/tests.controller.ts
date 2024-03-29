import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tests')
@ApiTags('tests')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TestsController {
   constructor(private readonly testsService: TestsService) { }

   @Post()
   create(@Body() createTestDto: CreateTestDto) {
      return this.testsService.create(createTestDto);
   }

   @Get()
   findAll() {
      return this.testsService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.testsService.findOne(+id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
      return this.testsService.update(+id, updateTestDto);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.testsService.remove(+id);
   }
}
