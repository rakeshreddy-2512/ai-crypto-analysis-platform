# AI-Powered Cryptocurrency Analysis Platform

A modern fintech-style crypto SaaS dashboard with authentication, portfolio management, live market analytics, and AI-generated trading insights.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion, Chart.js, React Router
- **Backend:** Node.js, Express, MongoDB, JWT
- **APIs:** CoinGecko (market/trending/history), extensible for Binance and crypto-news APIs

## Professional Folder Structure
```
ai-crypto-analysis-platform/
├── client/
│   ├── src/
│   │   ├── api/                  # Axios client
│   │   ├── pages/                # Dashboard, auth, profile
│   │   ├── components/           # Reusable UI blocks (extendable)
│   │   └── ...
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── config/                   # DB connection
│   ├── controllers/              # Route handlers
│   ├── middleware/               # JWT protection
│   ├── models/                   # User, Portfolio schemas
│   ├── routes/                   # API route modules
│   └── services/                 # Market API integrations
└── README.md
```

## Features Included
### Authentication
- User registration
- Login/logout flow (token-based)
- JWT authentication middleware
- Protected profile route
- User profile dashboard

### Core Crypto Features
1. Real-time price tracking (CoinGecko markets)
2. Live chart rendering (Chart.js line chart)
3. AI prediction response endpoint
4. Sentiment-style AI insight score output
5. Portfolio tracking dashboard
6. Watchlist persistence per user
7. Trending coins section
8. Market gainers and losers
9. Historical price analysis endpoint
10. AI-generated trading insights

### Advanced UX/Product Features
- Animated dashboard cards (Framer Motion)
- Dark mode toggle
- Glassmorphism cards
- Responsive layout (mobile/tablet/desktop)
- Fear & greed sample block
- Buy/sell signal simulation
- API rate limiting and centralized error handling
- Search-ready architecture + export-ready portfolio JSON

## API Documentation
Base URL: `http://localhost:5000/api`

### Auth
- `POST /auth/register`
  - body: `{ "name", "email", "password" }`
- `POST /auth/login`
  - body: `{ "email", "password" }`

### User
- `GET /users/me` (Bearer token required)
- `PUT /users/watchlist` (Bearer token required)
  - body: `{ "watchlist": ["bitcoin", "ethereum"] }`

### Market
- `GET /market/overview`
- `GET /market/history/:coinId?days=30`
- `GET /market/ai-insights?symbol=BTC`

### Portfolio
- `GET /portfolio` (Bearer token required)
- `PUT /portfolio` (Bearer token required)
  - body: `{ "assets": [...], "tradingHistory": [...] }`

## Setup Instructions
### 1) Install dependencies
```bash
npm install
npm install --workspace server
npm install --workspace client
```

### 2) Environment variables
Create `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crypto_ai
JWT_SECRET=super_secure_secret
```

Optional `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3) Run development
```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Demo Data
Use sample credentials after registration:
- `demo@crypto.ai` / `Password123!`

Dashboard includes sample/real hybrid chart data:
- Real sparkline values from CoinGecko when available
- Fallback sample curve for offline/demo mode

## Roadmap Extensions
- WebSocket streaming from Binance for tick-by-tick updates
- Dedicated sentiment pipeline from X/Reddit/news APIs
- Candlestick chart module with MACD/RSI/Bollinger indicators
- CSV/PDF portfolio export service
- Backtesting engine for buy/sell simulation strategies
