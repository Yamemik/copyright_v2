import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { PackModule } from './pack/pack.module';

@Module({
  imports: [UsersModule, SettingsModule, CoursesModule, LessonsModule, PackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
