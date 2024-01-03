import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum UserRole {
    ADMIN = "Администратор",
    EDITOR = "Редактор",
    STUDENT = "Ученик",
    GHOST = "Гость"
}

export enum UserAccessLevel {
    LVL0 = "Без пакета",
    LVL1 = "С первым пакетом",
    LVL2 = "Со вторым пакетом",
    LVL3 = "С третим пакетом"
}

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    name: string;

    @Column({ default: null })
    surname: string;

    @Column({ default: null })
    middlename: string;

    @Column({ default: null })
    birthday: Date;

    @Column({ unique: true })
    mail: string;

    @Column({ default: new Date() })
    registration_date: Date;

    @Column({ default: null })
    avatar: string;

    @Column({ default: null })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.GHOST,
    })
    role: UserRole

    @Column({
        type: "enum",
        enum: UserAccessLevel,
        default: UserAccessLevel.LVL0,
    })
    access_level: UserAccessLevel
}
