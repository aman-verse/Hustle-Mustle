import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Users, Shield, Trophy, Calendar, TrendingUp, Heart } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Plan Generator',
      description: 'Enter your body stats, goals, and constraints. Get a hyper-personalized workout and diet plan in seconds.',
      highlights: ['Mess-friendly meal options', 'Equipment-free alternatives', 'Beginner-safe defaults', 'PCOS/Thyroid considerations'],
      gradient: 'from-[#0A84FF] to-[#39FF14]'
    },
    {
      icon: MessageSquare,
      title: 'AI Coach Chat',
      description: 'Your 24/7 fitness companion. Ask questions, get motivation, and receive instant guidance.',
      highlights: ['Text chat in Basic tier', 'Voice/Video in Premium', 'Form correction tips', 'Injury alternatives'],
      gradient: 'from-[#39FF14] to-purple-500'
    },
    {
      icon: Users,
      title: 'Trainer Marketplace',
      description: 'Browse certified trainers, view their specializations, and book personalized sessions.',
      highlights: ['Video consultations', 'Language preferences', 'Client testimonials', 'Verified certifications'],
      gradient: 'from-purple-500 to-[#0A84FF]'
    },
    {
      icon: Shield,
      title: 'Anonymous Doubt Corner',
      description: 'Ask fitness questions without judgment. Get answers from trainers and AI.',
      highlights: ['Complete anonymity', 'Photo/video uploads', 'Community answers', 'Report/block tools'],
      gradient: 'from-[#0A84FF] to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Gamification & Challenges',
      description: 'Join 7/15/30-day challenges, compete in college leaderboards, and earn badges.',
      highlights: ['Streak tracking', 'Monthly rewards', 'Referral bonuses', 'Achievement badges'],
      gradient: 'from-pink-500 to-[#39FF14]'
    },
    {
      icon: Calendar,
      title: 'College Events',
      description: 'Attend fitness workshops, competitions, and networking events at your campus.',
      highlights: ['QR pass entry', 'Workshop registration', 'Sponsor showcases', 'Event gallery'],
      gradient: 'from-[#39FF14] to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your transformation with detailed metrics, photos, and performance logs.',
      highlights: ['Weight tracking', 'Measurement logs', 'Progress photos', 'Workout history'],
      gradient: 'from-orange-500 to-[#0A84FF]'
    },
    {
      icon: Heart,
      title: 'Safety-First Approach',
      description: 'Medical disclaimers, injury prevention, and safe progression built into every feature.',
      highlights: ['Beginner safeguards', 'Form tutorials', 'Rest day reminders', 'Medical cautions'],
      gradient: 'from-[#0A84FF] to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features - Hustle & Muscle</title>
        <meta name="description" content="Explore all features of Hustle & Muscle: AI Coach, Trainer Marketplace, Challenges, Anonymous Doubts, and more." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Your Success</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to transform your fitness journey, designed specifically for college students
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-[#0A84FF]/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></div>
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border border-[#39FF14]/30 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              All Features Work Together
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every feature is designed to complement each other, creating a comprehensive ecosystem 
              that supports your complete fitness transformation journey.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;