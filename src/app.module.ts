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
import { SettingEntity } from "./settings/entities/setting.entity";

import { MailModule } from "./mail/mail.module";

import { PaymentModule } from './payment/payment.module';
import { PaymentEntity } from "./payment/entities/payment.entity";

import { AuthModule } from './auth/auth.module';

import { ReactionsModule } from './reactions/reactions.module';
import { ReactionEntity } from "./reactions/entities/reaction.entity";

import { TestsModule } from './tests/tests.module';
import { TestEntity } from "./tests/entities/test.entity";

import { AdvancesModule } from './advances/advances.module';
import { AdvanceEntity } from "./advances/entities/advance.entity";

import { ResultsModule } from './results/results.module';
import { ResultEntity } from "./results/entities/result.entity";


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
			entities: [
				SettingEntity,
				UserEntity,
				PaymentEntity,
				CourseEntity,
				LessonEntity,
				ReactionEntity,
				ResultEntity,
				TestEntity,
				AdvanceEntity,
				UserEntity,
			],
			synchronize: true,
		}),
		UsersModule,
		SettingsModule,
		CoursesModule,
		LessonsModule,
		MailModule,
		PaymentModule,
		AuthModule,
		ReactionsModule,
		TestsModule,
		AdvancesModule,
		ResultsModule,
	],
})
export class AppModule { }
