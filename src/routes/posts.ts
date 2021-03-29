import { Router } from 'express';
import { createPost, getPosts } from '../controllers/post';

const router = Router();

router.get('/', async(req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).send(posts)
    } catch (e) {
        res.status(500).send({
            err: `err fetching all the posts ${e}`
        })
    }
})

router.post('/', async(req, res) => {
    try {
      const post = await createPost(req.body);  
      res.status(200).send(post)  
    } catch (e) {
        res.status(500).send({
            err: `could not able to post a new post ${e}`
        })
    }
})

router.patch('/:id', async(req, res) => {

    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to patch ${e}`
        })
    }
})

router.delete('/:id', async(req, res) => {

    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to delete a post ${e}`
        })
    }
})

export const postRoute = router;