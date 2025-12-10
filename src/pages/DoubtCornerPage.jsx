import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Upload, Search, TrendingUp, Shield, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DoubtCornerPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handlePostDoubt = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const trendingTopics = [
    'Protein intake for beginners',
    'Best exercises for lower back pain',
    'Mess-friendly high protein meals',
    'How to lose belly fat',
    'PCOS workout routine'
  ];

  const doubts = [
    {
      id: 1,
      question: 'Is it safe to workout during periods?',
      category: 'Women Health',
      answers: 12,
      likes: 45,
      timeAgo: '2 hours ago',
      isAnswered: true,
      topAnswer: 'Yes, light to moderate exercise is generally safe and can even help reduce cramps. Listen to your body and avoid heavy lifting if uncomfortable.'
    },
    {
      id: 2,
      question: 'How much protein do I need as a beginner?',
      category: 'Nutrition',
      answers: 8,
      likes: 32,
      timeAgo: '5 hours ago',
      isAnswered: true,
      topAnswer: 'For beginners, aim for 0.8-1g of protein per kg of body weight. You can get this from dal, paneer, eggs, and chicken available in mess.'
    },
    {
      id: 3,
      question: 'Best home workout for chest without equipment?',
      category: 'Workout',
      answers: 15,
      likes: 67,
      timeAgo: '1 day ago',
      isAnswered: true,
      topAnswer: 'Push-ups and their variations (incline, decline, diamond) are excellent for chest. Start with 3 sets of 10-15 reps.'
    },
    {
      id: 4,
      question: 'How to gain weight in hostel with mess food?',
      category: 'Nutrition',
      answers: 10,
      likes: 54,
      timeAgo: '1 day ago',
      isAnswered: true,
      topAnswer: 'Focus on calorie-dense foods: Add extra rice, eat more dal, have bananas and peanuts as snacks. Track your calories.'
    },
    {
      id: 5,
      question: 'Experiencing knee pain during squats, what to do?',
      category: 'Injury Prevention',
      answers: 6,
      likes: 28,
      timeAgo: '2 days ago',
      isAnswered: true,
      topAnswer: 'Check your form first - knees should not go past toes. Reduce weight and depth. If pain persists, consult a physiotherapist.'
    }
  ];

  const filteredDoubts = doubts.filter(doubt =>
    doubt.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doubt.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Anonymous Doubt Corner - Hustle & Muscle</title>
        <meta name="description" content="Ask fitness questions anonymously. Get answers from certified trainers and AI Coach without any judgment." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Anonymous
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Doubt Corner</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
              Ask anything fitness-related without revealing your identity. Safe, supportive, judgment-free.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-[#39FF14]" />
              <span className="text-sm font-medium text-[#39FF14]">100% Anonymous & Safe</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Post Doubt Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border-2 border-[#39FF14]/30 rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#39FF14]" />
                  Post Your Doubt Anonymously
                </h2>
                <p className="text-gray-300 mb-4">Your identity is completely hidden. Ask freely!</p>
                <div className="space-y-3">
                  <Button 
                    onClick={handlePostDoubt}
                    className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask a Question
                  </Button>
                  <Button 
                    onClick={handlePostDoubt}
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo/Video
                  </Button>
                </div>
              </motion.div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doubts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0A84FF]/50"
                />
              </div>

              {/* Doubts List */}
              <div className="space-y-4">
                {filteredDoubts.map((doubt, index) => (
                  <motion.div
                    key={doubt.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-[#0A84FF]/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{doubt.question}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="bg-[#0A84FF]/20 text-[#0A84FF] px-3 py-1 rounded-full text-xs">
                            {doubt.category}
                          </span>
                          <span>{doubt.timeAgo}</span>
                        </div>
                      </div>
                      {doubt.isAnswered && (
                        <div className="bg-[#39FF14]/20 text-[#39FF14] px-3 py-1 rounded-full text-xs font-semibold">
                          Answered
                        </div>
                      )}
                    </div>

                    {doubt.topAnswer && (
                      <div className="bg-white/5 rounded-xl p-4 mb-4">
                        <div className="text-xs text-[#39FF14] font-semibold mb-2">TOP ANSWER</div>
                        <p className="text-gray-300">{doubt.topAnswer}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-6 text-sm">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#39FF14] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {doubt.likes}
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#0A84FF] transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        {doubt.answers} answers
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Safety Notice */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#39FF14]" />
                  <h3 className="font-bold">Safety First</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0"></div>
                    <span>Your identity is completely anonymous</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0"></div>
                    <span>Report inappropriate content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0"></div>
                    <span>Block users if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0"></div>
                    <span>Consult doctor for medical issues</span>
                  </li>
                </ul>
              </motion.div>

              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#0A84FF]" />
                  <h3 className="font-bold">Trending Topics</h3>
                </div>
                <div className="space-y-2">
                  {trendingTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => setSearchTerm(topic)}
                      className="block w-full text-left text-sm text-gray-300 hover:text-[#39FF14] transition-colors p-2 rounded-lg hover:bg-white/5"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubtCornerPage;