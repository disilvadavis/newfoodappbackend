import express from 'express';
import { signup, signin, verifyToken } from '../controllers/authController.js';

const router = express.Router();

// POST /api/auth/signup - Create a new user
router.post('/signup', signup);

// POST /api/auth/signin - Authenticate user and get token
router.post('/signin', signin);

// Protected route example, use verifyToken middleware for routes requiring authentication
router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.role} user!` });
});

export default router;
