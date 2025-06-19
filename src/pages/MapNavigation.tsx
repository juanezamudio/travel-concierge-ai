import React from 'react';
import Button from '../components/atoms/Button';

const MapNavigation: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Map Navigation</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-6 h-64 flex items-center justify-center">
        <p className="text-gray-500">(Map will be embedded here. Navigation controls coming soon.)</p>
      </div>
      <div className="flex gap-4">
        <Button variant="primary">Next Step</Button>
        <Button variant="secondary">Pause</Button>
        <Button variant="secondary">Exit</Button>
      </div>
    </div>
  );
};

export default MapNavigation; 