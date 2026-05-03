import User from '../models/User.js';

export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (e) { next(e); }
};

export const updateWatchlist = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { watchlist: req.body.watchlist }, { new: true }).select('-password');
    res.json(user);
  } catch (e) { next(e); }
};
