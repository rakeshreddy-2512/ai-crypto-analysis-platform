import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useState } from 'react';

const Protected = ({ children }) => (localStorage.getItem('token') ? children : <Navigate to='/login' />);

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? 'dark min-h-screen bg-slate-950' : 'min-h-screen bg-slate-100 text-slate-900'}>
      <nav className='p-4 flex gap-4 glass m-4'>
        <Link to='/'>Dashboard</Link><Link to='/profile'>Profile</Link><Link to='/login'>Login</Link>
        <button className='ml-auto' onClick={() => setDark(!dark)}>Toggle Mode</button>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Protected><Profile /></Protected>} />
      </Routes>
    </div>
  );
}
