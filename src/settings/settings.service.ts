import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { SettingEntity } from './entities/setting.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingEntity)
    private repository: Repository<SettingEntity>
  ) { }

  async create(createSettingDto: CreateSettingDto) {
    return await this.repository.save(createSettingDto);
  }

  async findOne() {
    return await this.repository.findOneByOrFail({ id: 1 });
  }

  async find() {
    return await this.repository.find({});
  }

  async update(updateSettingDto: CreateSettingDto) {
    return await this.repository.update({ id: 1 }, updateSettingDto);
  }
}
