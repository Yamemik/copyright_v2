import { ApiProperty } from "@nestjs/swagger";
import { TestEntity } from "src/tests/entities/test.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('results')
export class ResultEntity {
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: Number;

   @Column()
   @ApiProperty()
   result: Number;

   @ManyToOne(() => TestEntity, (test) => test.results, { onDelete: "CASCADE" })
   @ApiProperty()
   test: TestEntity;

   @ManyToOne(() => UserEntity, (user) => user.results, { onDelete: "CASCADE" })
   @ApiProperty()
   user: UserEntity;

}
