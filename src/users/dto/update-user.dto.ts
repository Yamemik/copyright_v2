import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';


export class UpdateUserDto extends PartialType(CreateUserDto) {
	@ApiProperty()
	first_name: string;

	@ApiProperty()
	last_name: string;

	@ApiProperty()
	middle_name: string;

	@ApiProperty()
	date_birthday: Date;

	@ApiProperty()
	email: string;

	@ApiProperty()
	date_registration: Date;

	@ApiProperty()
	avatar: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	role: UserRole;

	@ApiProperty()
	access_level: Number;

	@ApiProperty()
	balance: Number;

}
