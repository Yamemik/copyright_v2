import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { MailModule } from '../mail/mail.module';
import { PaymentModule } from 'src/payment/payment.module';
import { SettingsModule } from 'src/settings/settings.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    MailModule,
    PaymentModule,
    SettingsModule,
  ],
  exports: [UsersService],
})
export class UsersModule { }
