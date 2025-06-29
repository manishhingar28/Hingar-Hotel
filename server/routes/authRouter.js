import express from 'express';
import { check } from 'express-validator';
import { signup, login ,getUser,updateUser} from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/signup', [
	check('userName', 'userName is required').not().isEmpty(),
	check('Email', 'Please enter a valid email').isEmail(),
	check('Password', 'Please enter a password with 6 or more characteres').isLength({ min: 6 }),
	check('Contact_no', 'Please enter a valid phone number').isMobilePhone('any'),
], signup);

router.post('/login', [
	check('Email', 'Please enter a valid email').isEmail(),
	check('Password', 'Password is required').exists()
], login);

router.get('/',authenticateToken,getUser);
router.put('/',authenticateToken,updateUser);
export default router;
