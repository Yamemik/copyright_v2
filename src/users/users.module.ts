import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { MailModule } from '../mail/mail.module';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity]), MailModule, PaymentModule],
  exports: [UsersService],
})
export class UsersModule { }
