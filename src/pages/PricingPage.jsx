import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { toast } = useToast();

  const handleSubscribe = (tier) => {
    toast({
      title: "🚧 Payment Integration Coming Soon!",
      description: `${tier} subscription will be available shortly. Stay tuned!`,
    });
  };

  const features = {
    basic: [
      'AI-generated workout plans',
      'AI-generated diet plans (mess-friendly)',
      'Habit reminders & notifications',
      'AI chat support (text only)',
      'Join challenges & leaderboards',
      'Anonymous doubt posting',
      'Progress tracking dashboard',
      'Community access'
    ],
    premium: [
      'Everything in Basic',
      'Voice calls with AI Coach',
      'Video calls with AI Coach',
      'Priority trainer guidance',
      'Video form correction by trainers',
      'Exclusive event access',
      'Advanced analytics',
      'Priority doubt resolution',
      'Custom meal planning',
      '1-on-1 trainer sessions (discounted)'
    ]
  };

  const comparisonFeatures = [
    { name: 'AI Workout Plans', basic: true, premium: true },
    { name: 'AI Diet Plans', basic: true, premium: true },
    { name: 'Text Chat Support', basic: true, premium: true },
    { name: 'Voice/Video Calls', basic: false, premium: true },
    { name: 'Trainer Marketplace Access', basic: true, premium: true },
    { name: 'Priority Trainer Support', basic: false, premium: true },
    { name: 'Video Form Correction', basic: false, premium: true },
    { name: 'Challenges & Leaderboards', basic: true, premium: true },
    { name: 'Anonymous Doubts', basic: true, premium: true },
    { name: 'Event Registration', basic: true, premium: true },
    { name: 'Exclusive Events', basic: false, premium: true },
    { name: 'Advanced Analytics', basic: false, premium: true },
    { name: 'Custom Meal Plans', basic: false, premium: true }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Hustle & Muscle</title>
        <meta name="description" content="Choose your fitness plan: Basic at ₹99/month or Premium at ₹149/month. Start your transformation today!" />
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
              Choose Your
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Power Level</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Affordable pricing designed for students. Start free, upgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-[#39FF14] text-black px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-[#0A84FF]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0A84FF]/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#0A84FF]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A84FF]">TIER 1</div>
                  <h3 className="text-2xl font-bold">Basic</h3>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">
                    ₹{billingCycle === 'monthly' ? '99' : '79'}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-[#39FF14] mt-1">Billed yearly at ₹948</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {features.basic.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0A84FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe('Basic')}
                className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-semibold text-lg py-6"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border-2 border-[#39FF14]/50 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-[#39FF14] text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" />
                POPULAR
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A84FF] to-[#39FF14] rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#39FF14]">TIER 2</div>
                  <h3 className="text-2xl font-bold">Premium</h3>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">
                    ₹{billingCycle === 'monthly' ? '149' : '119'}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-[#39FF14] mt-1">Billed yearly at ₹1,428</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {features.premium.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe('Premium')}
                className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-bold text-lg py-6"
              >
                Upgrade to Premium
              </Button>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Detailed Comparison
            </h2>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold text-[#0A84FF]">Basic</th>
                      <th className="text-center p-6 font-semibold text-[#39FF14]">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">{feature.name}</td>
                        <td className="p-6 text-center">
                          {feature.basic ? (
                            <Check className="w-5 h-5 text-[#0A84FF] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.premium ? (
                            <Check className="w-5 h-5 text-[#39FF14] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I upgrade from Basic to Premium anytime?',
                  a: 'Yes! You can upgrade anytime and only pay the pro-rated difference.'
                },
                {
                  q: 'Is there a free trial?',
                  a: 'We offer a 7-day free trial for both tiers. Cancel anytime, no questions asked.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept UPI, cards, net banking, and wallets. All payments are secure and encrypted.'
                },
                {
                  q: 'Can I cancel my subscription?',
                  a: 'Absolutely! Cancel anytime from your dashboard. No cancellation fees.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;