import { Router } from 'express';

const router = Router()

router.get('/', async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to get users ${e}`
        })
    }
})

router.post('/', async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to post a new user ${e}`
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to patch a user ${e}`
        })
    }
})

router.delete('/:id', async(req, res) => {

    try {
        
    } catch (e) {
        res.status(500).send({
            err: `could not able to delete a user ${e}`
        })
    }
})

export const userRoute = router;