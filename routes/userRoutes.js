import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
  getUserProfile,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/', protect, admin, getUsers); // so for getting all the users, you have to pass the request through two middleware functions, protect and admin
router.get('/profile', protect, getUserProfile);

export default router;