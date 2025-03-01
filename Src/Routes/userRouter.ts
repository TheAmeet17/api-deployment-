import {Router} from 'express';
import {userRouter} from '../controllers/userRouter';
const router=Router();

router.post('/register',userRouter)




export default router;