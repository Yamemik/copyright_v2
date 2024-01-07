import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import { UsersModule } from "./users/users.module";
import { UserEntity } from "./users/entities/user.entity";

import { LessonsModule } from "./lessons/lessons.module";
import { LessonEntity } from "./lessons/entities/lesson.entity";

import { CoursesModule } from "./courses/courses.module";
import { CourseEntity } from "./courses/entities/course.entity";

import { SettingsModule } from "./settings/settings.module";

import { MailModule } from "./mail/mail.module";
import { SettingEntity } from "./settings/entities/setting.entity";
import { PaymentModule } from './payment/payment.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT) || 5432,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [SettingEntity, UserEntity, CourseEntity, LessonEntity],
			synchronize: true,
		}),
		UsersModule,
		SettingsModule,
		CoursesModule,
		LessonsModule,
		MailModule,
		PaymentModule,
	],
})
export class AppModule { }
