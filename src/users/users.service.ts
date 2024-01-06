import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    private mailService: MailService
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const userData = await this.repository.save(createUserDto);

      const { password, ...result } = userData;

      await this.mailService.sendUserConfirmation(userData, 'https://copyright-chu.ru');

      return result;
    }
    catch (err) {
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
