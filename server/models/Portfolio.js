import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assets: [
      {
        coinId: String,
        symbol: String,
        amount: Number,
        avgBuyPrice: Number
      }
    ],
    tradingHistory: [
      {
        coinId: String,
        side: { type: String, enum: ['buy', 'sell'] },
        amount: Number,
        price: Number,
        executedAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model('Portfolio', PortfolioSchema);
