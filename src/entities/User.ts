import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Post } from "./Post";

@Entity('users')
export class User {
    @PrimaryColumn()
    email: string

    @Column({nullable: false})
    username: string

    @Column()
    password: string

    @Column({nullable: true})
    image?: string

    @Column({type: 'text',nullable: true})
    bio?: string 
    
    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password
    }
}