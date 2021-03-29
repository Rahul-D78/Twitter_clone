import { Column, Entity, PrimaryColumn } from "typeorm";

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
}