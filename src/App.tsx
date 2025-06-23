import React, { useEffect, useState } from 'react';
import { Play, TrendingUp, Users, Calendar, ArrowRight, BarChart3, Eye, MessageCircle, Share2, Star, CheckCircle } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/pewlax/youtube-accelerator-strategy-call', '_blank');
  };

  const analyticsScreenshots = [
    {
      title: "Main Channel's Stats",
      metric: "17,8M Views",
      period: "Last 30 Days",
      image: "https://6toa05wefv.ufs.sh/f/qnV82iULP0I7Ht1FnFXOtVvCwk1mzYsMZnfUiuo9e8AHpFcW"
  
    },
    {
      title: "One Video Changed Everything",
      metric: "$4,5k From One Video",
      image: "https://6toa05wefv.ufs.sh/f/qnV82iULP0I7zBG1Tof5UGZ26hI9BPktFdfKwjiJSHueXgz1"
    },
    {
      title: "Extra $1,5k-$6k/mo From Your Laptop",
      metric: "4 Figures Monthly",
      image: "https://6toa05wefv.ufs.sh/f/qnV82iULP0I7di3lrzw2YoCQkvpJKziA3M9e6WEcr84atVqP"
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Make Extra Money from Your Laptop",
      description: "You can pull in an extra $1,000 - $5,000 a month just by posting simple YouTube Shorts."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Get Paid to Talk About Stuff You Like",
      description: "You can actually earn money by making videos about things you’re interested in. It’s quick, simple, and doesn’t feel like work."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Earn Money While You Sleep",
      description: "Your videos can keep getting views and earning ad revenue around the clock — even while you’re asleep or out living your life."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grow With Little Effort",
      description: "You don’t need to grind for 10 hours — with a simple system, you can build your channel in your spare time and still see results."
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Setup Your Channel",
      description: "I'll help you pick your niche, make a logo, and get your channel ready to start running."
    },
    {
      step: "02",
      title: "Running the Channel",
      description: "I'll show you how to upload videos the right way (so you don't get stuck at 0 views), send daily video reviews, and we'll do a live call once a month to check what was working and what has to be fixed"
    },
    {
      step: "03",
      title: "Scaling Up",
      description: "Once your videos take off, I'll help you start earning and show you how to build a team so you can run more channels without doing everything yourself."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.03}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center space-x-2">
          <Play className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            YOUTUBE ACCELERATOR
          </span>
        </div>
        <button 
          onClick={handleBookCall}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Book A Call
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-8 py-20 md:py-32 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              90-Day YouTube Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Turn Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              YouTube Shorts
            </span>
            <br />
            Into Cash
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Master the art of viral content creation with 1-on-1 coaching that has generated 
            <span className="text-purple-400 font-semibold"> 54M+ views </span>
            and 
            <span className="text-purple-400 font-semibold"> $16,400+ </span>
            Profit Generated From One Channel
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleBookCall}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book A Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Success Stories</span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center animate-pulse">
            <TrendingUp className="w-8 h-8" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block">
          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
            <Star className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Results That 
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Speak </span>
              Volumes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real analytics from creators who transformed their channels in just 90 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {analyticsScreenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-violet-900/20 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{screenshot.metric}</div>
                  <div className="text-sm text-gray-400 mb-2">{screenshot.period}</div>
                  <div className="text-lg font-semibold">{screenshot.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">824+</div>
              <div className="text-gray-300">Videos Edited & Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">54M+</div>
              <div className="text-gray-300">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">$16420+</div>
              <div className="text-gray-300">Profit Generated From One Channel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$0.20+</div>
              <div className="text-gray-300">RPM Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Real 
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Benefits </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What you'll get out of this
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-6 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It 
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Works </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven 3-step system that transforms average creators into YouTube money printers
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 group"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-purple-500 to-violet-500 mx-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your 
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"> Money </span> Machine?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
             I'll show you exactly how I cracked the code—step by step. This is a 1-on-1 coaching, not some cookie-cutter course. Spots are super limited, so if you're serious, let's get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button 
                onClick={handleBookCall}
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Your Strategy Call</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-6 md:px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Play className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              YOUTUBE ACCELERATOR
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Learn How To Turn YouTube Shorts into a real, profitable business—with a step-by-step 1-on-1 coaching.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 YouTube Accelerator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
