import { getRepository } from "typeorm"
import { User } from "../entities/User"

export async function getUses() {
    try {
        const repo = getRepository(User)
        const users = await repo.find()
        
        if(!users) throw new Error('no users found');
        return users;
    } catch (e) {
        throw e
    }
}