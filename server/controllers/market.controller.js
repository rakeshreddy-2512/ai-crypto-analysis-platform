import { getMarketOverview, getHistory } from '../services/market.service.js';

export const overview = async (_req, res, next) => {
  try { res.json(await getMarketOverview()); } catch (e) { next(e); }
};

export const history = async (req, res, next) => {
  try { res.json(await getHistory(req.params.coinId, req.query.days)); } catch (e) { next(e); }
};

export const aiInsights = async (req, res) => {
  const { symbol = 'BTC' } = req.query;
  res.json({
    symbol,
    prediction: 'Bullish continuation likely with short-term pullback risk.',
    confidence: 0.74,
    sentimentScore: 0.66,
    buySellSignal: 'BUY',
    factors: ['Positive social momentum', 'Strong relative volume', 'Support holding above 20EMA']
  });
};
