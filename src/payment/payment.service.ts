import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentEntity } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private repository: Repository<PaymentEntity>
  ) { }

  async create(createPaymentDto: CreatePaymentDto) {
    return await this.repository.save(createPaymentDto);
  }

  async findAll() {
    return await this.repository
      .createQueryBuilder("payment")
      .leftJoinAndSelect("payment.user", "user")
      .getMany();
  }

  async findOne(id: number) {
    return await this.repository
      .createQueryBuilder("payment")
      .where({ id })
      .leftJoinAndSelect("payment.user", "user")
      .getOne();
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
