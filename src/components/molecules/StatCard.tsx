import React from 'react';

export interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="card text-center">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
        {icon}
      </div>
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default StatCard; 