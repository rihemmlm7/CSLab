import express from 'express'
import { signup,LogIn } from '../controllers/auth.controlles.js';

const router = express.Router();
router.post('/signup',signup);
router.post('/Log-in', LogIn);
export default router;