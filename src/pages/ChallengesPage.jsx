import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Flame, Award, Users, Target, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ChallengesPage = () => {
  const { toast } = useToast();

  const handleJoinChallenge = (challengeName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleReferral = () => {
     toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  }

  const activeChallenges = [
    {
      id: 1,
      name: '7-Day Push-Up Challenge',
      duration: '7 days',
      participants: 234,
      reward: '50 points + Badge',
      description: 'Complete 100 push-ups daily for 7 days',
      difficulty: 'Beginner',
      gradient: 'from-[#0A84FF] to-purple-500'
    },
    {
      id: 2,
      name: '15-Day Weight Loss Sprint',
      duration: '15 days',
      participants: 567,
      reward: '150 points + Badge',
      description: 'Follow AI diet plan and workout 5 days/week',
      difficulty: 'Intermediate',
      gradient: 'from-purple-500 to-[#39FF14]'
    },
    {
      id: 3,
      name: '30-Day Transformation',
      duration: '30 days',
      participants: 1023,
      reward: '500 points + Premium Badge',
      description: 'Complete transformation with diet, workout, and progress tracking',
      difficulty: 'Advanced',
      gradient: 'from-[#39FF14] to-orange-500'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Rahul S.', college: 'IIT Delhi', points: 2450, streak: 67 },
    { rank: 2, name: 'Priya M.', college: 'NIT Trichy', points: 2301, streak: 58 },
    { rank: 3, name: 'Arjun K.', college: 'BITS Pilani', points: 2156, streak: 45 },
    { rank: 4, name: 'Sneha P.', college: 'IIT Bombay', points: 1987, streak: 52 },
    { rank: 5, name: 'Vikram R.', college: 'NIT Warangal', points: 1834, streak: 41 }
  ];

  const badges = [
    { name: 'First Workout', icon: '🏋️', earned: true },
    { name: '7-Day Streak', icon: '🔥', earned: true },
    { name: 'Challenge Winner', icon: '🏆', earned: true },
    { name: '30-Day Streak', icon: '💪', earned: false },
    { name: 'Transformation King', icon: '👑', earned: false },
    { name: 'Refer 5 Friends', icon: '🤝', earned: false }
  ];

  return (
    <>
      <Helmet>
        <title>Challenges & Gamification - Hustle & Muscle</title>
        <meta name="description" content="Join fitness challenges, compete in leaderboards, earn badges and rewards. Gamify your fitness journey!" />
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
              Level Up Your
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Fitness Game</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join challenges, compete with peers, and earn rewards for your dedication
            </p>
          </motion.div>

          {/* Active Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-[#39FF14]" />
              Active Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activeChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-[#0A84FF]/50 transition-all duration-300 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${challenge.gradient}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold flex-1">{challenge.name}</h3>
                      <span className="bg-[#0A84FF]/20 text-[#0A84FF] text-xs px-3 py-1 rounded-full">
                        {challenge.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{challenge.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{challenge.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-[#39FF14]" />
                        <span className="text-[#39FF14] font-semibold">{challenge.reward}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleJoinChallenge(challenge.name)}
                      className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold"
                    >
                      Join Challenge
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#0A84FF]" />
                College Leaderboard
                <span className="text-sm font-normal text-gray-400 ml-auto">This Month</span>
              </h2>
              
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      user.rank <= 3
                        ? 'bg-gradient-to-r from-[#0A84FF]/20 to-[#39FF14]/20 border border-[#39FF14]/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${
                      user.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' :
                      user.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black' :
                      user.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-black' :
                      'bg-white/10 text-gray-300'
                    }`}>
                      {user.rank}
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.college}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-[#39FF14] font-bold">{user.points}</div>
                      <div className="text-xs text-gray-400 flex items-center justify-end gap-1">
                        <Flame className="w-3 h-3" />
                        {user.streak} days
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#39FF14]" />
                Your Badges
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center transition-all duration-300 ${
                      badge.earned
                        ? 'bg-gradient-to-br from-[#0A84FF]/30 to-[#39FF14]/30 border-2 border-[#39FF14]/50 hover:scale-105'
                        : 'bg-white/5 border border-white/10 opacity-50 grayscale'
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <div className="text-xs font-semibold">{badge.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-[#0A84FF]/20 to-[#39FF14]/20 rounded-xl p-4 border border-[#39FF14]/30">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#39FF14]" />
                  Referral Rewards
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Refer friends and earn 100 points per successful signup!
                </p>
                <Button 
                  onClick={handleReferral}
                  variant="outline" 
                  className="w-full border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 hover:text-[#39FF14]"
                >
                  Get Referral Link
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Streak Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 backdrop-blur-lg border-2 border-[#39FF14]/30 rounded-3xl p-8 text-center"
          >
            <Flame className="w-16 h-16 text-[#39FF14] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">
              Your Current Streak: <span className="text-[#39FF14]">0 Days</span>
            </h2>
            <p className="text-gray-300 mb-6 italic font-semibold">
              Streak saved! Let's hustle today! 💪
            </p>
            <p className="text-sm text-gray-400">
              Complete daily workouts to maintain your streak and earn bonus points
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ChallengesPage;