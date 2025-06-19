import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
      <Sparkles className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-bold text-gray-900">VibeCoded</span>
  </div>
);

export default Logo; 