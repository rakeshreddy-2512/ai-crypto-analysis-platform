import Portfolio from '../models/Portfolio.js';

export const getPortfolio = async (req, res, next) => {
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) portfolio = await Portfolio.create({ user: req.user.id, assets: [], tradingHistory: [] });
    res.json(portfolio);
  } catch (e) { next(e); }
};

export const updatePortfolio = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate({ user: req.user.id }, req.body, { new: true, upsert: true });
    res.json(portfolio);
  } catch (e) { next(e); }
};
