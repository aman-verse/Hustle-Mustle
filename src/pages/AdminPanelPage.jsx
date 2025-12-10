import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Calendar, DollarSign, CheckCircle, XCircle, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminPanelPage = () => {
  const [activeTab, setActiveTab] = useState('trainers');
  const { toast } = useToast();

  const handleAction = (action) => {
    toast({
      title: "🚧 Admin Action",
      description: `${action} functionality will be implemented shortly.`,
    });
  };

  const stats = [
    { label: 'Total Users', value: '5,234', change: '+12%', icon: Users, color: 'text-[#0A84FF]' },
    { label: 'Active Subscriptions', value: '3,456', change: '+8%', icon: TrendingUp, color: 'text-[#39FF14]' },
    { label: 'Monthly Revenue', value: '₹4.2L', change: '+15%', icon: DollarSign, color: 'text-yellow-400' },
    { label: 'Pending Approvals', value: '23', change: '-5%', icon: AlertCircle, color: 'text-orange-400' }
  ];

  const pendingTrainers = [
    { id: 1, name: 'Amit Kumar', specialization: 'Yoga', experience: '3 years', submitted: '2 days ago' },
    { id: 2, name: 'Priya Singh', specialization: 'CrossFit', experience: '5 years', submitted: '1 day ago' },
    { id: 3, name: 'Rahul Verma', specialization: 'Bodybuilding', experience: '7 years', submitted: '3 hours ago' }
  ];

  const pendingEvents = [
    { id: 1, title: 'Campus Marathon 2025', organizer: 'IIT Delhi Fitness Club', date: 'Jan 15, 2025' },
    { id: 2, title: 'Nutrition Workshop', organizer: 'Health First Foundation', date: 'Jan 20, 2025' }
  ];

  const sponsorshipRequests = [
    { id: 1, company: 'FitFood India', amount: '₹50,000', duration: '6 months' },
    { id: 2, company: 'SportGear Pro', amount: '₹75,000', duration: '12 months' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Panel - Hustle & Muscle</title>
        <meta name="description" content="Admin dashboard for managing trainers, events, sponsorships, and platform analytics." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage platform operations and approvals</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-[#39FF14]' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {['trainers', 'events', 'sponsorships', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'trainers' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Pending Trainer Verifications</h2>
                <div className="space-y-4">
                  {pendingTrainers.map((trainer) => (
                    <div key={trainer.id} className="bg-white/5 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{trainer.name}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                          <span>{trainer.specialization}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{trainer.experience}</span>
                          <span className="hidden md:inline">•</span>
                          <span>Submitted {trainer.submitted}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <Button
                          onClick={() => handleAction('Approve Trainer')}
                          className="bg-[#39FF14] hover:bg-[#39FF14]/90 text-black font-semibold"
                          size="sm"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleAction('Reject Trainer')}
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500 font-semibold"
                          size="sm"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Pending Event Approvals</h2>
                <div className="space-y-4">
                  {pendingEvents.map((event) => (
                    <div key={event.id} className="bg-white/5 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                          <span>{event.organizer}</span>
                           <span className="hidden md:inline">•</span>
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <Button
                          onClick={() => handleAction('Approve Event')}
                          className="bg-[#39FF14] hover:bg-[#39FF14]/90 text-black font-semibold" size="sm"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleAction('Reject Event')}
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500 font-semibold" size="sm"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sponsorships' && (
               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Sponsorship Requests</h2>
                <div className="space-y-4">
                  {sponsorshipRequests.map((sponsor) => (
                    <div key={sponsor.id} className="bg-white/5 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{sponsor.company}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                          <span className="text-[#39FF14] font-semibold">{sponsor.amount}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{sponsor.duration}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <Button
                          onClick={() => handleAction('Approve Sponsorship')}
                          className="bg-[#39FF14] hover:bg-[#39FF14]/90 text-black font-semibold" size="sm"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleAction('Reject Sponsorship')}
                          variant="outline"
                           className="border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500 font-semibold" size="sm"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Platform Analytics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">User Growth</h3>
                    <div className="h-48 bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Revenue Trends</h3>
                    <div className="h-48 bg-gradient-to-br from-[#39FF14]/20 to-[#0A84FF]/20 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-6">
                  Detailed analytics dashboard coming soon
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;