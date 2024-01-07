import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


export enum PaymentStatus {
   PENDING = "pending",
   SUCCEEDED = "succeeded ",
   CANCELED = "canceled",
}

@Entity('payment')
export class PaymentEntity {

   @PrimaryGeneratedColumn()
   id: number;

   @Column({ default: new Date() })
   date_payment: Date;

   @Column({ default: new Date(Date.now() + 1 * 24 * 3600 * 1000) })
   date_expire: Date;

   @Column({
      type: "enum",
      enum: PaymentStatus,
   })
   status: PaymentStatus

   @Column()
   sum: Number;

   @ManyToOne(() => UserEntity, (user) => user.payment)
   user: UserEntity;
}