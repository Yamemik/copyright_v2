import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('api/settings')
@ApiTags('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) { }

  // @Post()
  // @ApiOperation({ summary: 'Создать настройки (выполнить 1 раз)' })
  // async create(@Body() createSettingDto: CreateSettingDto) {
  //   return this.settingsService.create(createSettingDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Получить настройки' })
  async findOne() {
    return this.settingsService.findOne();
  }

  @Get('all')
  @ApiOperation({ summary: 'Получить все настройки' })
  async find() {
    return this.settingsService.find();
  }

  @Patch()
  @ApiOperation({ summary: 'Изменить настройки' })
  async update(@Body() updateSettingDto: CreateSettingDto) {
    return this.settingsService.update(updateSettingDto);
  }
}
