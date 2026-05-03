import { Router } from 'express';
import { getPortfolio, updatePortfolio } from '../controllers/portfolio.controller.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/', protect, getPortfolio);
router.put('/', protect, updatePortfolio);
export default router;
