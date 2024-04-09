import express from 'express'
import { signup,LogIn, google} from '../controllers/auth.controlles.js';

const router = express.Router();
router.post('/signup',signup);
router.post('/Log-in', LogIn);
router.post('/google', google);
export default router;