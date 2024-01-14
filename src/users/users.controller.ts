import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreateSuperUserDto } from './dto/create-superuser.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserId } from 'src/decorators/user-id.decorator';

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
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   findAll() {
      return this.usersService.findAll();
   }

   @Get(':id')
   @ApiOperation({ summary: 'Получить пользователя по id' })
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
   }

   @Get('/me')
   @ApiOperation({ summary: 'Получить себя по токену' })
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   getMe(@UserId() id: number) {
      return this.usersService.findOne(id);
   }

   @Patch(':id')
   @ApiOperation({ summary: 'Изменить пользователя по id' })
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
   }

   @Delete(':id')
   @ApiOperation({ summary: 'Удалить пользователя по id' })
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
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
