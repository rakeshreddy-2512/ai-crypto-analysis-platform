import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import marketRoutes from './routes/market.routes.js';
import portfolioRoutes from './routes/portfolio.routes.js';

dotenv.config();
connectDB();

const app = express();
const limiter = rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true });

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', limiter);

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
