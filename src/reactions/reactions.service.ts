import { Injectable } from '@nestjs/common';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReactionEntity } from './entities/reaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReactionsService {
	constructor(
		@InjectRepository(ReactionEntity)
		private repository: Repository<ReactionEntity>,
	) { }

	async create(createReactionDto: CreateReactionDto) {
		return await this.repository.save(createReactionDto);
	}

	async findAllByLesson(lesson_id: number) {
		return await this.repository.find({ where: { lesson: { id: lesson_id } } });
	}

	async update(lesson: number, user: number, updateReactionDto: UpdateReactionDto) {
		return await this.repository.createQueryBuilder("reaction")
			.update(ReactionEntity)
			.set({ reaction: updateReactionDto.reaction })
			// .where({
			// 	user: { id: user },
			// })
			.execute();
	}
}
