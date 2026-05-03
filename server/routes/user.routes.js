import { Router } from 'express';
import { getProfile, updateWatchlist } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/me', protect, getProfile);
router.put('/watchlist', protect, updateWatchlist);
export default router;
