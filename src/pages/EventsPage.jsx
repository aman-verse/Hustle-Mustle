import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, QrCode, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EventsPage = () => {
  const { toast } = useToast();

  const handleRegister = (eventName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleGallery = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  }

  const upcomingEvents = [
    {
      id: 1,
      title: 'Campus Fitness Marathon',
      date: 'Dec 15, 2025',
      time: '6:00 AM',
      location: 'IIT Delhi Campus',
      participants: 450,
      type: 'Competition',
      prize: '₹50,000',
      isPremium: false
    },
    {
      id: 2,
      title: 'Nutrition & Meal Prep Workshop',
      date: 'Dec 20, 2025',
      time: '4:00 PM',
      location: 'Online',
      participants: 234,
      type: 'Workshop',
      prize: 'Free',
      isPremium: false
    },
    {
      id: 3,
      title: 'Strength Training Masterclass',
      date: 'Dec 28, 2025',
      time: '5:00 PM',
      location: 'BITS Pilani Gym',
      participants: 89,
      type: 'Workshop',
      prize: 'Premium Only',
      isPremium: true
    }
  ];

  const pastEvents = [
    {
      title: 'Inter-College Fitness Challenge 2024',
      date: 'Nov 2024',
      participants: 1200
    },
    {
      title: 'Yoga & Meditation Retreat',
      date: 'Oct 2024',
      participants: 350
    },
    {
      title: 'Bodybuilding Championship',
      date: 'Sep 2024',
      participants: 180
    }
  ];

  const sponsors = [
    { name: 'MyProtein India', category: 'Nutrition Partner' },
    { name: 'Decathlon', category: 'Equipment Partner' },
    { name: 'Cult.fit', category: 'Fitness Partner' },
    { name: 'HealthifyMe', category: 'Technology Partner' }
  ];

  return (
    <>
      <Helmet>
        <title>Events & Sponsorships - Hustle & Muscle</title>
        <meta name="description" content="Join fitness events, workshops, and competitions at your campus. Network with trainers and win prizes!" />
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
              Campus Fitness
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Events</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Attend workshops, compete in challenges, and network with fitness enthusiasts
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#0A84FF]" />
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-[#0A84FF]/50 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0A84FF]/30 to-[#39FF14]/30 relative">
                    <img alt={`${event.title} event poster`} src="https://images.unsplash.com/photo-1570647786875-02abe7ac9c37" />
                    {event.isPremium && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Premium
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold flex-1">{event.title}</h3>
                      <span className="bg-[#0A84FF]/20 text-[#0A84FF] text-xs px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {event.date} • {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="w-4 h-4 text-gray-400" />
                        {event.participants} registered
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-[#39FF14]" />
                        <span className="text-[#39FF14] font-semibold">{event.prize}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleRegister(event.title)}
                      className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold"
                    >
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* QR Pass Entry */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <QrCode className="w-6 h-6 text-[#39FF14]" />
                Event Entry Pass
              </h2>
              <div className="bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 rounded-2xl p-8 text-center border border-[#39FF14]/30">
                <div className="w-48 h-48 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="w-24 h-24 text-gray-400" />
                </div>
                <p className="text-gray-400 mb-4">
                  Your QR pass will appear here after registration
                </p>
                <p className="text-sm text-gray-500">
                  Show this at event entry for quick check-in
                </p>
              </div>
            </motion.div>

            {/* Past Events Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-[#0A84FF]" />
                Past Events
              </h2>
              <div className="space-y-4">
                {pastEvents.map((event, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{event.date}</span>
                      <span className="text-[#39FF14]">{event.participants} participants</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleGallery}
                variant="outline" 
                className="w-full mt-6 border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                View Full Gallery
              </Button>
            </motion.div>
          </div>

          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Our Sponsors & Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.map((sponsor, i) => (
                <div key={i} className="text-center">
                  <div className="h-24 bg-white/10 rounded-xl mb-3 flex items-center justify-center p-4">
                    <span className="font-bold text-gray-400 text-center">{sponsor.name}</span>
                  </div>
                  <p className="text-xs text-gray-400">{sponsor.category}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;