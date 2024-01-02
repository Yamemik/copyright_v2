import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum UserRole {
    ADMIN = "Администратор",
    EDITOR = "Редактор",
    USER = "Пользователь",
    GHOST = "Гость",
}

export enum UserGender {
    MALE = "Мужской",
    FEMAIL = "Женский"
}

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    name: string;

    @Column({ default: null })
    surname: string;

    @Column({
        type: "enum",
        enum: UserGender,
        default: null
    })
    gender: UserGender;

    @Column({ default: null })
    birthday: Date;

    @Column({ unique: true })
    nickname: string;

    @Column({ unique: true })
    telephone: string;

    @Column({ default: new Date() })
    registrationDate: Date;

    @Column({ default: null })
    avatar: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole
}
