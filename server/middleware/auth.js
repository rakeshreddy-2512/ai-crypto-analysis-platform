import jwt from 'jsonwebtoken';

export const protect = (req, _res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next({ status: 401, message: 'No token provided' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
    next();
  } catch {
    next({ status: 401, message: 'Invalid token' });
  }
};
