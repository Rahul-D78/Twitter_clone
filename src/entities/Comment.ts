import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: string

    @Column({type: 'text', nullable: false})
    body: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User)
    author: User

    constructor(id: string, body: string, author: User) {
        this.id = id;
        this.body = body;
        this.author = author
    }
}