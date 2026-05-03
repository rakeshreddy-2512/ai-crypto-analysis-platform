import axios from 'axios';

const cg = axios.create({ baseURL: 'https://api.coingecko.com/api/v3' });

export const getMarketOverview = async () => {
  const { data } = await cg.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 20,
      page: 1,
      sparkline: true,
      price_change_percentage: '24h,7d'
    }
  });

  const trending = (await cg.get('/search/trending')).data.coins.map((c) => c.item);
  const fearGreed = { score: 62, label: 'Greed' };

  return {
    topMarkets: data,
    trending,
    gainers: [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5),
    losers: [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5),
    fearGreed
  };
};

export const getHistory = async (coinId = 'bitcoin', days = 30) => {
  const { data } = await cg.get(`/coins/${coinId}/market_chart`, {
    params: { vs_currency: 'usd', days }
  });
  return data;
};
