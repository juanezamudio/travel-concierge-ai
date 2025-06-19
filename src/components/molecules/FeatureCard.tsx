import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="card text-center group">
    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-100 flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-200`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard; 