import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { UserEntity } from './users/entities/user.entity';
import { CourseEntity } from './courses/entities/course.entity';
import { LessonEntity } from './lessons/entities/lesson.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, CourseEntity, LessonEntity],
      synchronize: true,
    }),
    UsersModule, SettingsModule, CoursesModule, LessonsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
