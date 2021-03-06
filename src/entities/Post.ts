import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('posts')
export class Post {
   @PrimaryGeneratedColumn()
   id: string

   @Column({length: 200, nullable: false})
   body: string

   @Column({type : 'text', nullable: true})
   tags?: string[]

   @Column({default: 0})
   favoritesCount ?: number

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   @ManyToOne(() => User)
   author: User

   constructor( body: string) {
        this.body = body
   }
}