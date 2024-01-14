import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './entities/test.entity';


@Module({
	controllers: [TestsController],
	providers: [TestsService],
	imports: [
		TypeOrmModule.forFeature([TestEntity])
	]
})
export class TestsModule { }
