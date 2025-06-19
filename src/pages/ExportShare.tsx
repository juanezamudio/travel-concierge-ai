import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import Toast from '../components/atoms/Toast';

const ExportShare: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const handleExport = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Export & Share</h1>
      <div className="flex gap-4 mb-6">
        <Button variant="primary" onClick={handleExport}>Export to Calendar (ICS)</Button>
        <Button variant="secondary" onClick={handleExport}>Export as PDF</Button>
        <Button variant="secondary" onClick={handleExport}>Email Itinerary</Button>
      </div>
      {showToast && <Toast message="Exported! (Stub)" type="success" />}
    </div>
  );
};

export default ExportShare; 