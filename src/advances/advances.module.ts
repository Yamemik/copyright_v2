import { Module } from '@nestjs/common';
import { AdvancesService } from './advances.service';
import { AdvancesController } from './advances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvanceEntity } from './entities/advance.entity';


@Module({
	controllers: [AdvancesController],
	providers: [AdvancesService],
	imports: [TypeOrmModule.forFeature([AdvanceEntity])]
})
export class AdvancesModule { }
