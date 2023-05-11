import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn
} from "typeorm";

@Entity("example.users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
