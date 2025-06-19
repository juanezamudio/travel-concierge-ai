import React from 'react';
import Button from '../components/atoms/Button';
import { User, Apple, Phone } from 'lucide-react';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const handleGoogleSignIn = () => {
  window.location.href = `${API_BASE_URL}/auth/google`;
};

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-6 text-sky-300">Sign In</h1>
        <p className="text-gray-300 mb-8 text-lg">Welcome back to Travel Concierge AI</p>
        <div className="flex flex-col gap-4 w-full">
          <Button variant="primary" className="flex items-center justify-center gap-3 w-full" onClick={handleGoogleSignIn}>
            <User className="w-6 h-6 text-sky-300" /> Sign in with Google
          </Button>
          <Button variant="secondary" className="flex items-center justify-center gap-3 w-full">
            <Apple className="w-6 h-6 text-gray-100" /> Sign in with Apple
          </Button>
          <Button variant="secondary" className="flex items-center justify-center gap-3 w-full">
            <Phone className="w-5 h-5 text-emerald-300" /> Sign in with Phone
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login; 