import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { api } from '../api/client';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function Dashboard() {
  const [overview, setOverview] = useState(null);
  const [ai, setAi] = useState(null);
  useEffect(() => { (async () => { setOverview((await api.get('/market/overview')).data); setAi((await api.get('/market/ai-insights?symbol=BTC')).data); })(); }, []);
  const sample = overview?.topMarkets?.[0]?.sparkline_in_7d?.price || [1,2,3,4,3,5,6];
  return <div className='p-4 grid lg:grid-cols-3 gap-4'>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='glass p-4 lg:col-span-2'>
      <h2 className='text-xl font-semibold mb-4'>Live Crypto Charts</h2>
      <Line data={{ labels: sample.map((_,i)=>i), datasets:[{label:'BTC Trend',data:sample,borderColor:'#22d3ee'}] }} />
    </motion.div>
    <div className='glass p-4'><h3 className='font-semibold'>AI Trading Insights</h3><p>{ai?.prediction}</p><p className='mt-2'>Signal: {ai?.buySellSignal}</p></div>
    <div className='glass p-4'><h3>Trending Coins</h3>{overview?.trending?.slice(0,5).map(c=><p key={c.id}>{c.name} ({c.symbol})</p>)}</div>
    <div className='glass p-4'><h3>Top Gainers</h3>{overview?.gainers?.map(c=><p key={c.id}>{c.symbol}: {c.price_change_percentage_24h?.toFixed(2)}%</p>)}</div>
    <div className='glass p-4'><h3>Top Losers</h3>{overview?.losers?.map(c=><p key={c.id}>{c.symbol}: {c.price_change_percentage_24h?.toFixed(2)}%</p>)}</div>
  </div>;
}
