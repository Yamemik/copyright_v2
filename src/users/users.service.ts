import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserRole } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MailService } from '../mail/mail.service';
import { RegistrationUserDto } from './dto/registration-user.dto';
import { PaymentService } from 'src/payment/payment.service';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    private mailService: MailService,
    private paymentService: PaymentService,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const userData = await this.repository.save(createUserDto);
      const { password, ...result } = userData;

      const createPaymentDto = new CreatePaymentDto(userData);
      const payment = this.paymentService.create(createPaymentDto);
      const url = `copyright-chu.ru/payment?order_id=${(await payment).id}`;

      await this.mailService.sendUserConfirmation(userData, url);

      return result;
    }
    catch (err) {
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneByOrFail({ id });
  }

  async findOneByEmail(email: string) {
    return await this.repository.findOneByOrFail({ email })
  }

  async registrationUser(id: number, registrationUserDto: RegistrationUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(registrationUserDto.password, salt);

    registrationUserDto.role = UserRole.STUDENT;
    registrationUserDto.password = hash;

    return await this.repository.update({ id }, registrationUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.repository.delete({ id });
  }
}
