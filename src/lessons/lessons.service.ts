import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './entities/lesson.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LessonsService {
	constructor(
		@InjectRepository(LessonEntity)
		private repository: Repository<LessonEntity>

	) { }

	async create(createLessonDto: CreateLessonDto) {
		return await this.repository.save(createLessonDto);
	}

	async findAll() {
		return await this.repository.find();
	}

	async findAllByCours(course_id: number) {
		return await this.repository.find({ where: { course: { id: course_id } } });
	}


	findOne(id: number) {
		return `This action returns a #${id} lesson`;
	}

	update(id: number, updateLessonDto: UpdateLessonDto) {
		return `This action updates a #${id} lesson`;
	}

	remove(id: number) {
		return `This action removes a #${id} lesson`;
	}
}
