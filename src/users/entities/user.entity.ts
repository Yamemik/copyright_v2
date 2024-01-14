import { ApiProperty } from "@nestjs/swagger";
import { AdvanceEntity } from "src/advances/entities/advance.entity";
import { PaymentEntity } from "src/payment/entities/payment.entity";
import { ReactionEntity } from "src/reactions/entities/reaction.entity";
import { ResultEntity } from "src/results/entities/result.entity";
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
    @ApiProperty()
    id: number;

    @Column({ default: null })
    @ApiProperty()
    first_name: string;

    @Column({ default: null })
    @ApiProperty()
    last_name: string;

    @Column({ default: null })
    @ApiProperty()
    middle_name: string;

    @Column({ default: null })
    @ApiProperty()
    date_birthday: Date;

    @Column({ unique: true })
    @ApiProperty()
    email: string;

    @Column({ default: new Date() })
    @ApiProperty()
    date_registration: Date;

    @Column({ default: null })
    @ApiProperty()
    avatar: string;

    @Column({ default: null })
    @ApiProperty()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUPID,
    })
    @ApiProperty()
    role: UserRole;

    @Column({ default: 0 })
    @ApiProperty()
    access_level: Number;

    @Column({ default: 0 })
    @ApiProperty()
    balance: Number;

    @OneToMany(() => PaymentEntity, (payment) => payment.user)
    @ApiProperty()
    payments: PaymentEntity[];

    @OneToMany(() => ReactionEntity, (reaction) => reaction.user)
    @ApiProperty()
    reactions: ReactionEntity[];

    @OneToMany(() => ResultEntity, (result) => result.user)
    @ApiProperty()
    results: ResultEntity[];

    @OneToOne(() => AdvanceEntity)
    @ApiProperty()
    @JoinColumn()
    advance: AdvanceEntity;
}