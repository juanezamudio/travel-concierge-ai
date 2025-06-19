import React from 'react';
import Button from '../components/atoms/Button';

const Itinerary: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Itinerary</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <p className="text-gray-500">(Itinerary list will appear here. Edit and chat features coming soon.)</p>
      </div>
      <div className="flex gap-4">
        <Button variant="primary">Edit via Chat</Button>
        <Button variant="secondary">Export</Button>
      </div>
    </div>
  );
};

export default Itinerary; 