import { PaymentEntity } from "src/payment/entities/payment.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";


export enum UserRole {
    ADMIN = "admin",
    AUTHOR = "author",
    STUDENT = "student",
    STUPID = "stupid",
}

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    first_name: string;

    @Column({ default: null })
    last_name: string;

    @Column({ default: null })
    middle_name: string;

    @Column({ default: null })
    date_birthday: Date;

    @Column({ unique: true })
    email: string;

    @Column({ default: new Date() })
    date_registration: Date;

    @Column({ default: null })
    avatar: string;

    @Column({ default: null })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUPID,
    })
    role: UserRole;

    @Column({ default: 0 })
    access_level: Number;

    @OneToMany(() => PaymentEntity, (payment) => payment.user)
    payment: PaymentEntity;
}