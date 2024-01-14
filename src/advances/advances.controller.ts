import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdvancesService } from './advances.service';
import { CreateAdvanceDto } from './dto/create-advance.dto';
import { UpdateAdvanceDto } from './dto/update-advance.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('advances')
@ApiTags('advances')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AdvancesController {
	constructor(private readonly advancesService: AdvancesService) { }

	@Post()
	create(@Body() createAdvanceDto: CreateAdvanceDto) {
		return this.advancesService.create(createAdvanceDto);
	}

	@Get()
	findAll() {
		return this.advancesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.advancesService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateAdvanceDto: UpdateAdvanceDto) {
		return this.advancesService.update(+id, updateAdvanceDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.advancesService.remove(+id);
	}
}
