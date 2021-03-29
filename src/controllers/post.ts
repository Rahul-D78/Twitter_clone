import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

interface PostData {
    body: string,
}

export async function getPosts () {
    
    try {
        const repo = getRepository(Post)
        const post = await repo.find()
        if(!post) throw new Error('posts not found');
        return post
    } catch (e) {
        throw e
    }
}

export async function createPost(data: PostData): Promise<Post> {

    if(!data.body) throw new Error('body could not be null');

    try {
        const repo = getRepository(Post);
        
        const post = await repo.save(new Post(
            data.body
        ))
        return post
    } catch (e) {
        throw e
    }
}