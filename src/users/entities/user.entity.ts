import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum UserRole {
    ADMIN = "admin",
    AUTHOR = "author",
    STUDENT = "student",
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
    datebirthday: Date;

    @Column({ unique: true })
    mail: string;

    @Column({ default: new Date() })
    date_registration: Date;

    @Column({ default: null })
    avatar: string;

    @Column({ default: null })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUDENT,
    })
    role: UserRole

    @Column({ default: 0 })
    access_level: Number
}
