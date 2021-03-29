import { Router } from 'express';
import { postRoute } from './posts';
import { userRoute } from './users';

const router = Router();

router.use('/posts', postRoute);
router.use('/user', userRoute);

export const allRoute = router;