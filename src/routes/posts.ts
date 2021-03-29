import { Router } from 'express';

const router = Router();

router.get('/', async(req, res) => {
    res.send("Fetch all articles from db")
})

router.post('/', async(req, res) => {
    try {
        
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