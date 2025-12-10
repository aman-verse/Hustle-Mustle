import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState('phone');
  const [step, setStep] = useState('input');
  const { toast } = useToast();

  const handleSendOTP = () => {
    setStep('otp');
    toast({
      title: "OTP Sent!",
      description: "Check your phone/email for the verification code.",
    });
  };

  const handleVerifyOTP = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Login / Register - Hustle & Muscle</title>
        <meta name="description" content="Login to your Hustle & Muscle account. Access your personalized fitness plans, track progress, and more." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#0E0E10] via-[#0A84FF]/20 to-[#0E0E10]">
        <div className="max-w-md w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-3">
                Welcome!
              </h1>
              <p className="text-gray-400">
                Login or Register to start your fitness journey
              </p>
            </div>

            {/* Login Method Toggle */}
            <div className="flex gap-2 mb-6 bg-white/5 rounded-xl p-1">
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'phone'
                    ? 'bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                Phone
              </button>
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'email'
                    ? 'bg-gradient-to-r from-[#0A84FF] to-[#39FF14] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>

            {step === 'input' ? (
              <motion.div 
                key="input"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor={loginMethod} className="block text-sm font-medium mb-2">
                    {loginMethod === 'phone' ? 'Phone Number' : 'Email Address'}
                  </label>
                  <div className="relative">
                    {loginMethod === 'phone' ? (
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    ) : (
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    )}
                    <input
                      id={loginMethod}
                      type={loginMethod === 'phone' ? 'tel' : 'email'}
                      placeholder={loginMethod === 'phone' ? '+91 98765 43210' : 'your@email.com'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0A84FF]/50"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSendOTP}
                  className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold py-6 text-base"
                >
                  Send OTP
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium mb-2">
                    Enter OTP
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="otp"
                      type="text"
                      placeholder="000000"
                      maxLength="6"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0A84FF]/50 text-center text-2xl tracking-widest"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Didn't receive OTP? 
                    <button className="text-[#0A84FF] ml-1 hover:text-[#39FF14] transition-colors font-semibold">
                      Resend
                    </button>
                  </p>
                </div>

                <Button 
                  onClick={handleVerifyOTP}
                  className="w-full bg-gradient-to-r from-[#0A84FF] to-[#39FF14] hover:opacity-90 text-white font-semibold py-6 text-base"
                >
                  Verify & Login
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <button
                  onClick={() => setStep('input')}
                  className="w-full text-gray-400 hover:text-white text-sm transition-colors"
                >
                  ← Change {loginMethod === 'phone' ? 'phone number' : 'email'}
                </button>
              </motion.div>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                New to Hustle & Muscle?{' '}
                <Link to="/pricing" className="text-[#39FF14] hover:text-white transition-colors font-semibold">
                  Join Now
                </Link>
              </p>
            </div>
          </motion.div>

          <p className="text-center text-xs text-gray-500 mt-6 px-4">
            By logging in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;