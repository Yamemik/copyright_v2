import { UserEntity } from "src/users/entities/user.entity";
import { PaymentStatus } from "../entities/payment.entity";
import { ApiProperty } from "@nestjs/swagger";


export class CreatePaymentDto {
   @ApiProperty({
      type: "enum",
      enum: PaymentStatus,
      default: PaymentStatus.PENDING
   })
   status: PaymentStatus;
   @ApiProperty()
   sum: Number;
   @ApiProperty()
   user: UserEntity;
}
