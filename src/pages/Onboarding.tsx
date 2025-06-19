import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import { Sparkles, Map, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

const slides = [
  {
    icon: <Sparkles className="w-14 h-14 text-sky-300 mb-4" />,
    title: 'AI-Powered Planning',
    description: 'Let AI craft a personalized itinerary for your trip—just tell us your city, dates, and interests.',
    accent: 'text-sky-300'
  },
  {
    icon: <Map className="w-14 h-14 text-emerald-300 mb-4" />,
    title: 'Live Maps & Navigation',
    description: "Navigate your journey with real-time maps, directions, and offline access for today's stops.",
    accent: 'text-emerald-300'
  },
  {
    icon: <MessageCircle className="w-14 h-14 text-purple-300 mb-4" />,
    title: 'Concierge Chat',
    description: 'Chat with your AI assistant to edit your plans, get recommendations, and receive instant updates.',
    accent: 'text-purple-300'
  }
];

const Onboarding: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { goToLogin } = useNavigation();

  const next = () => setIndex((i) => (i + 1 < slides.length ? i + 1 : i));
  const prev = () => setIndex((i) => (i - 1 >= 0 ? i - 1 : i));
  const handleGetStarted = () => goToLogin();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-end mb-6">
          <button
            className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
            onClick={handleGetStarted}
            aria-label="Skip onboarding"
          >
            Skip
          </button>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {slides[index].icon}
              <h2 className={`text-3xl font-bold mb-3 ${slides[index].accent}`}>{slides[index].title}</h2>
              <p className="text-gray-200 text-lg mb-8">{slides[index].description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-2 mb-8">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${i === index ? 'bg-sky-300 w-4' : 'bg-gray-600'}`}
              />
            ))}
          </div>
          <div className="flex w-full justify-between">
            <Button
              variant="secondary"
              className="px-6"
              onClick={prev}
              disabled={index === 0}
            >
              Back
            </Button>
            {index < slides.length - 1 ? (
              <Button
                variant="primary"
                className="px-6 flex items-center gap-2"
                onClick={next}
              >
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="primary"
                className="px-6 flex items-center gap-2"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 