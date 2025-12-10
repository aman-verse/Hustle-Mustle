import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Users, Trophy, MessageCircle, Zap, TrendingUp, Shield, Target } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Coach',
      description: 'Personalized workout & diet plans tailored to your goals',
      gradient: 'from-[#0A84FF] to-[#39FF14]'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Connect with certified trainers for video guidance',
      gradient: 'from-[#39FF14] to-[#0A84FF]'
    },
    {
      icon: Trophy,
      title: 'Challenges',
      description: 'Compete in college leaderboards and win rewards',
      gradient: 'from-[#0A84FF] to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Anonymous Doubts',
      description: 'Ask fitness questions without judgment',
      gradient: 'from-purple-500 to-[#39FF14]'
    }
  ];

  const plans = [
    {
      title: 'Beginner-Friendly',
      description: 'Start your fitness journey with confidence',
      icon: Target
    },
    {
      title: 'Mess-Friendly Meals',
      description: 'Diet plans that work with hostel food',
      icon: Zap
    },
    {
      title: 'Progress Tracking',
      description: 'Watch your transformation unfold',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      college: 'IIT Delhi',
      text: 'Lost 12kg in 3 months! The AI coach understood my hostel constraints perfectly.',
      rating: 5,
      streak: 45
    },
    {
      name: 'Priya Patel',
      college: 'NIT Trichy',
      text: 'Finally someone who gets student life. Mess-friendly diet was a game changer!',
      rating: 5,
      streak: 30
    },
    {
      name: 'Arjun Kumar',
      college: 'BITS Pilani',
      text: 'The trainer marketplace helped me find the perfect coach. Voice calls are amazing!',
      rating: 5,
      streak: 60
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hustle & Muscle - Transforming Fitness for Students</title>
        <meta name="description" content="AI-powered fitness platform designed for college students. Get personalized workout plans, connect with trainers, and join challenges." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#0A84FF]/20 to-[#0E0E10] pt-20 pb-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-6">
                <Shield className="w-4 h-4 text-[#39FF14]" />
                <span className="text-sm font-medium text-[#39FF14]">Safety-First Approach</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transforming Fitness
                <br />
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent">
                  for Students
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                AI-powered personalized plans, expert trainers, and a supportive community. 
                <span className="italic font-semibold text-[#39FF14]"> Let's hustle today!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/pricing">
                  <Button size="lg" className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-bold text-lg px-8 py-6">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] text-lg px-8 py-6">
                    How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Plan Preview Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mt-16"
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A84FF] to-[#39FF14] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#0E0E10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Everything You Need to
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Succeed</span>
              </h2>
              <p className="text-xl text-gray-400">Designed specifically for college students</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-[#0A84FF]/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Comparison */}
        <section className="py-20 bg-gradient-to-b from-[#0E0E10] to-[#0A84FF]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Choose Your
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Power Level</span>
              </h2>
              <p className="text-xl text-gray-400">Start free, upgrade when you're ready</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-[#0A84FF]/50 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-[#0A84FF] mb-2">TIER 1</div>
                <h3 className="text-3xl font-bold mb-2">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0A84FF]"></div>
                    </div>
                    <span className="text-gray-300">AI-generated workout & diet plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0A84FF]"></div>
                    </div>
                    <span className="text-gray-300">Habit reminders & notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0A84FF]"></div>
                    </div>
                    <span className="text-gray-300">AI chat support (text only)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0A84FF]"></div>
                    </div>
                    <span className="text-gray-300">Join challenges & leaderboards</span>
                  </li>
                </ul>
                <Link to="/pricing">
                  <Button className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-semibold">
                    Get Started
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border-2 border-[#39FF14]/50 rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-[#39FF14] text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="text-sm font-semibold text-[#39FF14] mb-2">TIER 2</div>
                <h3 className="text-3xl font-bold mb-2">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹149</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    </div>
                    <span className="text-gray-300"><strong>Everything in Basic</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    </div>
                    <span className="text-gray-300">Voice & video calls with AI Coach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    </div>
                    <span className="text-gray-300">Priority trainer guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    </div>
                    <span className="text-gray-300">Video form correction by trainers</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14]"></div>
                    </div>
                    <span className="text-gray-300">Exclusive event access</span>
                  </li>
                </ul>
                <Link to="/pricing">
                  <Button className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-bold">
                    Upgrade to Premium
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#0E0E10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Real Students,
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Real Results</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-[#0A84FF]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#39FF14] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.college}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#39FF14] font-bold text-lg">{testimonial.streak}</div>
                      <div className="text-xs text-gray-400">Day Streak 🔥</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A84FF]/20 via-[#39FF14]/10 to-[#0E0E10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Fitness Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 italic font-semibold">
                Streak saved! Let's hustle today! 💪
              </p>
              <Link to="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-bold text-lg px-12 py-6">
                  Join Now - Start Free
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;