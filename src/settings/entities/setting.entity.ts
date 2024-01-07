import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('setting')
export class SettingEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   object: string;
}
