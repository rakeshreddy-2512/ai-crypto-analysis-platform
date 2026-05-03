import { Router } from 'express';
import { overview, history, aiInsights } from '../controllers/market.controller.js';

const router = Router();
router.get('/overview', overview);
router.get('/history/:coinId', history);
router.get('/ai-insights', aiInsights);
export default router;
