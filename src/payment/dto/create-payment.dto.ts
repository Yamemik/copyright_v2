import { UserEntity } from "src/users/entities/user.entity";
import { PaymentStatus } from "../entities/payment.entity";
import { ApiProperty } from "@nestjs/swagger";


export class CreatePaymentDto {
   constructor(userEntity) {
      this.status = PaymentStatus.PENDING;
      this.user = userEntity;
      this.sum = 0;
   }
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
