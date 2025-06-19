import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

const TripForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [interests, setInterests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Call AI service to generate itinerary
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create a Trip</h1>
        <div className="mb-4">
          <label className="block mb-1 font-medium">City</label>
          <Input value={city} onChange={e => setCity(e.target.value)} required placeholder="Enter city" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Arrival Date</label>
          <Input type="date" value={arrival} onChange={e => setArrival(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Departure Date</label>
          <Input type="date" value={departure} onChange={e => setDeparture(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Interests</label>
          <Input value={interests} onChange={e => setInterests(e.target.value)} required placeholder="e.g. food, art, hiking" />
        </div>
        <Button type="submit" variant="primary" className="w-full">Generate Itinerary</Button>
        {submitted && <p className="text-green-600 mt-4">(Stub) Itinerary generated! (To be implemented)</p>}
      </form>
    </div>
  );
};

export default TripForm; 