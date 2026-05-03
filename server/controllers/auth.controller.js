import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const sign = (user) => jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '7d' });

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return next({ status: 400, message: 'Email already registered' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { next(e); }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) return next({ status: 401, message: 'Invalid credentials' });
    res.json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { next(e); }
};
