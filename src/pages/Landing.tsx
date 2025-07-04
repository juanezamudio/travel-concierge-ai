import React from 'react';
import { motion } from 'framer-motion';
import {
  Map,
  MessageCircle,
  CalendarCheck,
  CloudOff,
  Send,
  Users,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/molecules/Layout';
import Button from '../components/atoms/Button';
import FeatureCard from '../components/molecules/FeatureCard';
import StatCard from '../components/molecules/StatCard';
import { useNavigation } from '../hooks/useNavigation';

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-sky-300" />,
    title: 'AI-Powered Itinerary',
    description: "Get a personalized, day-by-day travel plan generated by AI based on your interests and dates.",
    color: 'text-sky-300'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-300" />,
    title: 'Real-Time Chat',
    description: 'Edit your trip on the go with a conversational AI concierge.',
    color: 'text-emerald-300'
  },
  {
    icon: <Map className="w-6 h-6 text-cyan-300" />,
    title: 'Map Navigation',
    description: 'Embedded maps and turn-by-turn navigation for every stop.',
    color: 'text-cyan-300'
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-purple-300" />,
    title: 'Export & Share',
    description: 'Export your itinerary to calendar, PDF, or email in one click.',
    color: 'text-purple-300'
  },
  {
    icon: <CloudOff className="w-6 h-6 text-fuchsia-300" />,
    title: 'Offline Access',
    description: "Today's plans and maps are always available—even without internet.",
    color: 'text-fuchsia-300'
  },
  {
    icon: <Send className="w-6 h-6 text-yellow-300" />,
    title: 'Push Notifications',
    description: 'Get "leave now" alerts, weather warnings, and schedule changes.',
    color: 'text-yellow-300'
  }
];

const stats = [
  { icon: <Globe className="w-5 h-5 text-sky-300" />, value: '1,200+', label: 'Cities Supported', valueColor: 'text-sky-300' },
  { icon: <Users className="w-5 h-5 text-emerald-300" />, value: '25K+', label: 'Trips Planned', valueColor: 'text-emerald-300' },
  { icon: <MessageCircle className="w-5 h-5 text-cyan-300" />, value: 'Instant', label: 'AI Chat Edits', valueColor: 'text-cyan-300' }
];

const Landing: React.FC = () => {
  const { goToOnboarding, goToLogin } = useNavigation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-sky-300 mb-6">
            Travel Concierge <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Plan, manage, and navigate your next adventure with AI-powered itineraries, real-time chat, live maps, and seamless export. Your personal travel assistant—always in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="flex items-center justify-center space-x-2 text-lg px-6 py-3"
              onClick={goToOnboarding}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              className="text-lg px-6 py-3"
              onClick={goToLogin}
            >
              Try a Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border border-gray-700">
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.valueColor}`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-emerald-300">Why Travel Concierge AI?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need for a seamless, personalized travel experience—powered by AI.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="card text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${feature.color} bg-gray-900 border border-gray-700 group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${feature.color}`}>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Landing; 