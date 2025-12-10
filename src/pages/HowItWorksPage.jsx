import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { UserCheck, Brain, MessageCircle, Video, Trophy, TrendingUp, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: UserCheck,
      title: 'Enter Your Body Stats',
      description: 'Tell us about your height, weight, fitness level, and goals. Share any constraints like hostel food or limited equipment.',
      details: ['Quick 2-minute signup', 'Medical history check', 'Goal setting', 'Constraint mapping']
    },
    {
      icon: Brain,
      title: 'Get Personalized Plan',
      description: 'Our AI generates a custom workout and diet plan tailored to your unique situation and goals.',
      details: ['Mess-friendly meals', 'Equipment alternatives', 'Beginner-safe exercises', 'Weekly progression']
    },
    {
      icon: MessageCircle,
      title: 'Chat with AI Coach',
      description: 'Start texting your AI Coach for daily motivation, form tips, and instant doubt resolution.',
      details: ['24/7 availability', 'Smart reminders', 'Form guidance', 'Meal suggestions']
    },
    {
      icon: Video,
      title: 'Upgrade for Voice/Video',
      description: 'Premium users unlock voice and video calls with AI Coach plus access to certified trainers.',
      details: ['Video consultations', 'Form correction', 'Live guidance', 'Priority support']
    },
    {
      icon: Trophy,
      title: 'Join Challenges',
      description: 'Participate in 7/15/30-day challenges, compete in college leaderboards, and earn rewards.',
      details: ['Daily check-ins', 'Streak tracking', 'Leaderboard rankings', 'Badge collection']
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Log your workouts, meals, weight, and measurements. Watch your transformation unfold.',
      details: ['Photo timeline', 'Metric graphs', 'Workout logs', 'Achievement milestones']
    },
    {
      icon: Calendar,
      title: 'Attend Events',
      description: 'Join fitness workshops, competitions, and networking events happening at your college.',
      details: ['Workshop registration', 'QR code entry', 'Meet trainers', 'Win prizes']
    },
    {
      icon: CheckCircle,
      title: 'Achieve Your Goals',
      description: 'With consistent effort and our comprehensive support system, reach your fitness goals safely and effectively.',
      details: ['Sustainable results', 'Community support', 'Expert guidance', 'Lifelong habits']
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - Hustle & Muscle</title>
        <meta name="description" content="Learn how Hustle & Muscle works: from entering your stats to achieving your fitness goals with AI-powered guidance." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Your Journey to
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Fitness Success</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to transform your health and fitness with personalized AI guidance
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A84FF] via-[#39FF14] to-[#0A84FF] hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6 md:gap-8">
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0A84FF] to-[#39FF14] rounded-full flex items-center justify-center shadow-lg shadow-[#0A84FF]/50">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center text-black font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-[#0A84FF]/50 transition-all duration-300 group">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#39FF14] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-lg">
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></div>
                            <span className="text-sm text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border-2 border-[#39FF14]/30 rounded-3xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-6 italic font-semibold">
              Let's hustle today! Your transformation starts now 💪
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:text-white">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksPage;