import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateSuperUserDto } from './dto/create-superuser.dto';

@Controller('api/users')
@ApiTags('users')
export class UsersController {
   constructor(private readonly usersService: UsersService) { }

   @Post('/reg_begin')
   @ApiBody({ type: CreateUserDto })
   @ApiOperation({ summary: 'Создание юзера, заказа и отправка письма' })
   async create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.createUser(createUserDto);
   }

   @Get()
   @ApiOperation({ summary: 'Получить всех пользователей' })
   findAll() {
      return this.usersService.findAll();
   }

   @Get(':id')
   @ApiOperation({ summary: 'Получить пользователя по id' })
   findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
   }

   @Patch(':id')
   @ApiOperation({ summary: 'Изменить пользователя по id' })
   async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
   }

   @Delete(':id')
   @ApiOperation({ summary: 'Удалить пользователя по id' })
   async remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
   }

   @Post('/create_admin')
   @ApiBody({ type: CreateSuperUserDto })
   @ApiOperation({ summary: 'Создание админа' })
   async createSuperUser(@Body() createUserDto: CreateSuperUserDto) {
      return this.usersService.createSuperUser(createUserDto);
   }

}
