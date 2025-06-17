import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Form {
    //type walo ko batna kay create hoi coloumn
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    FirstName: string;
  @Column({ nullable: true })
PhoneNumber: string;

    @Column()
    Email: string;
      @Column()
    Meassage: string;
}
