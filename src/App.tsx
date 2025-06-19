import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TripForm from './pages/TripForm';
import Itinerary from './pages/Itinerary';
import MapNavigation from './pages/MapNavigation';
import ExportShare from './pages/ExportShare';
import ChatWidget from './pages/ChatWidget';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trip-form" element={<TripForm />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/map" element={<MapNavigation />} />
        <Route path="/export" element={<ExportShare />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ChatWidget />
    </Router>
  );
}

export default App; 