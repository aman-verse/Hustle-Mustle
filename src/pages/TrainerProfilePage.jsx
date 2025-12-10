import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Award, Languages, MapPin, Calendar, Video, ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const TrainerProfilePage = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock trainer data - in real app, fetch based on id
  const trainer = {
    id: parseInt(id),
    name: 'Rahul Sharma',
    specialization: 'Strength Training',
    certifications: ['ACE Certified', 'NASM-CPT', 'Nutrition Specialist'],
    rating: 4.9,
    reviews: 127,
    languages: ['Hindi', 'English', 'Punjabi'],
    price: '₹299/session',
    experience: '5 years',
    location: 'Delhi NCR',
    bio: 'Passionate fitness trainer with 5+ years of experience helping students achieve their fitness goals. Specialized in strength training and muscle building with a focus on proper form and injury prevention.',
    achievements: [
      'Trained 500+ students',
      'Certified Strength & Conditioning Coach',
      'Former college athlete',
      'Published fitness researcher'
    ],
    packages: [
      { name: 'Single Session', price: '₹299', sessions: 1, validity: '1 week' },
      { name: '4 Sessions Pack', price: '₹999', sessions: 4, validity: '1 month' },
      { name: '8 Sessions Pack', price: '₹1,799', sessions: 8, validity: '2 months' }
    ],
    clientResults: [
      { name: 'Amit K.', result: 'Lost 15kg in 4 months', rating: 5 },
      { name: 'Sneha R.', result: 'Gained muscle, improved confidence', rating: 5 },
      { name: 'Vikram P.', result: 'Bench press increased by 30kg', rating: 5 }
    ]
  };

  const handleBookSession = (packageName) => {
    toast({
      title: "🚧 Booking System Coming Soon!",
      description: `Session booking for ${packageName} will be available shortly.`,
    });
  };

  if (!trainer) {
    return <div>Trainer not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{trainer.name} - Trainer Profile | Hustle & Muscle</title>
        <meta name="description" content={`Book sessions with ${trainer.name}, a certified ${trainer.specialization} trainer. ${trainer.experience} experience.`} />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/trainers" className="inline-flex items-center gap-2 text-[#0A84FF] hover:text-[#39FF14] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Trainers
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden sticky top-24">
                <div className="h-64 bg-gradient-to-br from-[#0A84FF]/30 to-[#39FF14]/30 relative">
                  <img alt={`${trainer.name} profile photo`} src="https://images.unsplash.com/photo-1669751843583-5a3911e54e57" />
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{trainer.name}</h1>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-[#39FF14] fill-[#39FF14]" />
                    <span className="font-semibold">{trainer.rating}</span>
                    <span className="text-gray-400">({trainer.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0A84FF]" />
                      <span className="text-sm text-gray-300">{trainer.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0A84FF]" />
                      <span className="text-sm text-gray-300">{trainer.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-[#0A84FF]" />
                      <span className="text-sm text-gray-300">{trainer.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0A84FF]" />
                      <span className="text-sm text-gray-300">{trainer.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-3xl font-bold text-[#39FF14] mb-1">{trainer.price}</div>
                    <div className="text-sm text-gray-400 mb-4">Per video session</div>
                    <Button 
                      onClick={() => handleBookSession('Quick Session')}
                      className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold"
                    >
                      Book a Session
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Intro Video */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Video className="w-6 h-6 text-[#0A84FF]" />
                  Introduction Video
                </h2>
                <div className="aspect-video bg-gradient-to-br from-[#0A84FF]/20 to-[#39FF14]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-400">Video preview coming soon</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{trainer.bio}</p>
                
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.certifications.map((cert, i) => (
                    <span key={i} className="bg-[#0A84FF]/20 text-[#0A84FF] px-4 py-2 rounded-lg font-medium">
                      {cert}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-2">
                  {trainer.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-2"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Packages */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Session Packages</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {trainer.packages.map((pkg, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0A84FF]/50 transition-all">
                      <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-[#39FF14] mb-1">{pkg.price}</div>
                      <div className="text-sm text-gray-400 mb-4">
                        {pkg.sessions} sessions • {pkg.validity}
                      </div>
                      <Button 
                        onClick={() => handleBookSession(pkg.name)}
                        variant="outline" 
                        className="w-full border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF]"
                      >
                        Select Package
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Results */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-[#39FF14]" />
                  Client Success Stories
                </h2>
                <div className="space-y-4">
                  {trainer.clientResults.map((client, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{client.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(client.rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 text-[#39FF14] fill-[#39FF14]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 italic">"{client.result}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerProfilePage;