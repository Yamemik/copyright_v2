import { ApiProperty } from "@nestjs/swagger";
import { ResultEntity } from "src/results/entities/result.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('tests')
export class TestEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: Number;

   @Column()
   @ApiProperty()
   question: string;

   @Column("simple-array")
   @ApiProperty()
   answers: string[];

   @OneToMany(() => ResultEntity, (result) => result.test)
   @ApiProperty()
   results: ResultEntity[];
}
