import React from 'react';
import Button from '../components/atoms/Button';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Button variant="primary" className="mb-8">Create Trip</Button>
      <div>
        <h2 className="text-xl font-semibold mb-2">Past Trips</h2>
        <p className="text-gray-500">(Coming soon)</p>
      </div>
    </div>
  );
};

export default Dashboard; 