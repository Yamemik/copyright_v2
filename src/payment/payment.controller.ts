import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/payments')
@ApiTags('payments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PaymentController {
   constructor(private readonly paymentService: PaymentService) { }

   @Post()
   @ApiOperation({ summary: 'Создание платежа' })
   async create(@Body() createPaymentDto: CreatePaymentDto) {
      return this.paymentService.create(createPaymentDto);
   }

   @Get()
   @ApiOperation({ summary: 'Получить все платежи' })
   async findAll() {
      return this.paymentService.findAll();
   }

   @Get(':id')
   @ApiOperation({ summary: 'Получить платёж по id' })
   async findOne(@Param('id') id: string) {
      return this.paymentService.findOne(+id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
      return this.paymentService.update(+id, updatePaymentDto);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.paymentService.remove(+id);
   }
}
