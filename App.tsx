import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import { ItineraryPage } from './pages/Itinerary';
import { ChecklistPage } from './pages/Checklist';
import { InfoPage } from './pages/Info';
import { Snowflake } from 'lucide-react';

const BACKGROUND_NOISE_URL = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'itinerary': return <ItineraryPage />;
      case 'checklist': return <ChecklistPage />;
      case 'info': return <InfoPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden font-sans selection:bg-cyan-500/30">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[#0a0a0a]">
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Noise Texture (Optional for glass realism) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: BACKGROUND_NOISE_URL }}></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-md mx-auto min-h-screen p-4 flex flex-col">
        {/* Global Header - Apple Vision Pro Large Title Style */}
        <header className="flex flex-col gap-2 px-2 pt-6 pb-6 mb-2">
          <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            日本東北之旅
          </h1>
          
          <div className="inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <Snowflake size={12} className="text-cyan-200" />
            <span className="text-xs font-medium tracking-widest text-white/80">2026 冬季</span>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;