import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export enum PaymentStatus {
   PENDING = "pending",
   SUCCEEDED = "succeeded ",
   CANCELED = "canceled",
}

@Entity('payment')
export class PaymentEntity {

   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @Column({ default: new Date() })
   @ApiProperty()
   date_payment: Date;

   @Column({ default: new Date(new Date().getTime() + 60 * 60 * 24 * 1000) })
   @ApiProperty()
   date_expire: Date;

   @Column({
      type: "enum",
      enum: PaymentStatus,
   })
   @ApiProperty()
   status: PaymentStatus

   @Column()
   @ApiProperty()
   sum: Number;

   @ManyToOne(() => UserEntity, (user) => user.payments, { onDelete: "CASCADE" })
   @ApiProperty({ type: () => UserEntity })
   user: UserEntity;
}