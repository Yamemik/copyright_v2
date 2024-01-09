import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingEntity } from './entities/setting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  exports: [SettingsService],
})
export class SettingsModule { }
