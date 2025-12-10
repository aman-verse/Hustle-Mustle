import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import FeaturesPage from '@/pages/FeaturesPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import PricingPage from '@/pages/PricingPage';
import TrainerMarketplacePage from '@/pages/TrainerMarketplacePage';
import TrainerProfilePage from '@/pages/TrainerProfilePage';
import DoubtCornerPage from '@/pages/DoubtCornerPage';
import ChallengesPage from '@/pages/ChallengesPage';
import EventsPage from '@/pages/EventsPage';
import LoginPage from '@/pages/LoginPage';
import AdminPanelPage from '@/pages/AdminPanelPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0E0E10] text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/trainers" element={<TrainerMarketplacePage />} />
            <Route path="/trainer/:id" element={<TrainerProfilePage />} />
            <Route path="/doubts" element={<DoubtCornerPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPanelPage />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;