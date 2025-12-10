import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Languages, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainerMarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialization, setFilterSpecialization] = useState('all');

  const trainers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      specialization: 'Strength Training',
      certifications: ['ACE', 'NASM-CPT'],
      rating: 4.9,
      reviews: 127,
      languages: ['Hindi', 'English'],
      price: '₹299/session',
      experience: '5 years',
      location: 'Delhi NCR'
    },
    {
      id: 2,
      name: 'Priya Mehta',
      specialization: 'Weight Loss',
      certifications: ['ISSA', 'Nutrition Coach'],
      rating: 4.8,
      reviews: 98,
      languages: ['Hindi', 'English', 'Gujarati'],
      price: '₹349/session',
      experience: '4 years',
      location: 'Mumbai'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      specialization: 'Bodybuilding',
      certifications: ['IFBB Pro', 'ACE'],
      rating: 5.0,
      reviews: 203,
      languages: ['Hindi', 'English', 'Punjabi'],
      price: '₹499/session',
      experience: '8 years',
      location: 'Bangalore'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      specialization: 'Yoga & Flexibility',
      certifications: ['RYT-500', 'Pilates'],
      rating: 4.9,
      reviews: 156,
      languages: ['Hindi', 'English', 'Marathi'],
      price: '₹249/session',
      experience: '6 years',
      location: 'Pune'
    },
    {
      id: 5,
      name: 'Vikram Kumar',
      specialization: 'Athletic Performance',
      certifications: ['CSCS', 'NSCA-CPT'],
      rating: 4.7,
      reviews: 89,
      languages: ['Hindi', 'English', 'Tamil'],
      price: '₹399/session',
      experience: '7 years',
      location: 'Chennai'
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      specialization: 'PCOS/PCOD Management',
      certifications: ['Nutritionist', 'Women Health'],
      rating: 4.9,
      reviews: 134,
      languages: ['Hindi', 'English', 'Telugu'],
      price: '₹379/session',
      experience: '5 years',
      location: 'Hyderabad'
    }
  ];

  const specializations = ['all', 'Strength Training', 'Weight Loss', 'Bodybuilding', 'Yoga & Flexibility', 'Athletic Performance', 'PCOS/PCOD Management'];

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterSpecialization === 'all' || trainer.specialization === filterSpecialization;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Helmet>
        <title>Trainer Marketplace - Hustle & Muscle</title>
        <meta name="description" content="Find certified fitness trainers for personalized guidance. Browse profiles, read reviews, and book sessions." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Find Your Perfect
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] bg-clip-text text-transparent"> Trainer</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect with certified trainers for personalized guidance and support
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search trainers by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0A84FF]/50"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterSpecialization}
                onChange={(e) => setFilterSpecialization(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-8 py-3 text-white focus:outline-none focus:border-[#0A84FF]/50 appearance-none cursor-pointer min-w-[200px]"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec} className="bg-[#0E0E10]">
                    {spec === 'all' ? 'All Specializations' : spec}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Trainer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-[#0A84FF]/50 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#0A84FF]/30 to-[#39FF14]/30 relative overflow-hidden">
                  <img alt={`${trainer.name} - ${trainer.specialization} trainer`} src="https://images.unsplash.com/photo-1602067680415-f57316f0e42a" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#39FF14] fill-[#39FF14]" />
                    <span className="font-semibold">{trainer.rating}</span>
                    <span className="text-xs text-gray-400">({trainer.reviews})</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#0A84FF]" />
                    <span className="text-sm text-gray-300">{trainer.specialization}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="text-xs bg-[#0A84FF]/20 text-[#0A84FF] px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{trainer.languages.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{trainer.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-[#39FF14]">{trainer.price}</div>
                      <div className="text-xs text-gray-400">{trainer.experience} exp</div>
                    </div>
                    <Link to={`/trainer/${trainer.id}`}>
                      <Button className="bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTrainers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No trainers found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrainerMarketplacePage;