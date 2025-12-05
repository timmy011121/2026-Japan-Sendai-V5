
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { FLIGHTS } from '../constants';
import { Plane, QrCode, ExternalLink, Calendar, Timer, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const daysLeft = Math.max(0, Math.ceil((new Date('2026-01-12T00:00:00').getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="space-y-8 pb-24 animate-fade-in">
      {/* Countdown Section */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Timer size={18} className="text-cyan-400" /> 旅程倒數
          </h2>
        </div>
        <GlassCard className="flex flex-row items-center justify-between px-6 py-6 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
           <div className="w-12 h-12 rounded-full bg-white/10 shadow-glass-thick flex items-center justify-center shrink-0 backdrop-blur-md">
              <Timer className="text-cyan-400" size={24} />
           </div>
           <div className="flex-1 ml-4 flex flex-col justify-center">
              <span className="text-xs text-white/50 uppercase tracking-widest font-medium mb-1">距離啟程</span>
              <div className="flex flex-col">
                 <span className="text-base font-bold text-white tracking-wide whitespace-nowrap">日本東北</span>
                 <span className="text-sm font-medium text-white/60 tracking-wider">2026.01.12</span>
              </div>
           </div>
           <div className="flex items-baseline gap-2">
              <span className="text-5xl font-thin text-white tabular-nums tracking-tighter leading-none drop-shadow-md">{daysLeft}</span>
              <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">DAYS</span>
           </div>
        </GlassCard>
      </section>

      {/* Flight Info Section */}
      <section>
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Plane size={18} className="text-cyan-400" /> 航班資訊
          </h2>
        </div>
        <div className="space-y-5">
          {FLIGHTS.map((flight, index) => {
            const isDepart = flight.type === 'Depart';
            const [originCode, , originTerminal] = flight.from.split(' ');
            const [destCode, , destTerminal] = flight.to.split(' ');
            const [departTime, arriveTime] = flight.time.split('-').map(t => t.trim());
            const laserGradient = isDepart ? 'from-transparent via-cyan-400 to-transparent' : 'from-transparent via-purple-400 to-transparent';

            return (
              <GlassCard key={index} hideGloss={true} className="!p-5 relative group hover:bg-white/10 transition-colors duration-500">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 bg-white/5 shadow-glass-thick rounded-full px-3 py-1 backdrop-blur-md">
                            <Calendar size={10} className="text-white/60" />
                            <span className="text-[10px] font-bold tracking-wide text-white/80">{flight.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 shadow-glass-thick rounded-full px-3 py-1 backdrop-blur-md">
                            <Plane size={10} className="text-white/60" />
                            <span className="text-[10px] font-medium tracking-wide text-white/80">{flight.airline} {flight.flightNumber}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 backdrop-blur-md shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
                         <span className="text-[10px] font-bold text-green-300 tracking-wide">準點</span>
                    </div>
                </div>

                <div className="flex items-center justify-between px-2 relative z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-thin tracking-widest text-white drop-shadow-lg font-sans">{originCode}</span>
                        <div className="mt-2 flex flex-col items-center gap-0.5">
                            <span className="text-lg font-medium text-white/80 -translate-y-[20%]">{departTime}</span>
                            {originTerminal && <span className="text-[10px] text-white/40 font-bold bg-white/5 px-1.5 rounded border border-white/5">{originTerminal}</span>}
                        </div>
                    </div>

                    <div className="flex-1 mx-6 relative flex flex-col items-center justify-center">
                        <div className="mb-3 bg-black/20 shadow-inner-deep rounded-full px-2 py-0.5 backdrop-blur-sm">
                            <span className="text-[9px] text-white/50 tracking-widest uppercase font-bold">3H 50M</span>
                        </div>
                        <div className="w-full relative h-[20px] flex items-center">
                            <div className={`absolute w-full h-[1px] bg-gradient-to-r ${laserGradient} opacity-50`} />
                            <div className={`absolute w-full h-[1px] bg-gradient-to-r ${laserGradient} blur-[2px] opacity-80`} />
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full backdrop-blur-md z-20 shadow-glass-thick ${isDepart ? 'shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'shadow-[0_0_15px_rgba(168,85,247,0.4)]'}`}>
                                <Plane size={14} className={`${isDepart ? 'text-cyan-300' : 'text-purple-300'} ${!isDepart ? '-scale-x-100' : ''}`} fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <div className="absolute left-0 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_5px_white]" />
                            <div className="absolute right-0 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_5px_white]" />
                        </div>
                         <span className="mt-3 text-[9px] text-white/30 tracking-widest">ECONOMY</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-thin tracking-widest text-white drop-shadow-lg font-sans">{destCode}</span>
                         <div className="mt-2 flex flex-col items-center gap-0.5">
                            <span className="text-lg font-medium text-white/80 -translate-y-[20%]">{arriveTime}</span>
                             {destTerminal && <span className="text-[10px] text-white/40 font-bold bg-white/5 px-1.5 rounded border border-white/5">{destTerminal}</span>}
                        </div>
                    </div>
                </div>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r ${laserGradient} opacity-20`} />
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <h2 className="text-lg font-semibold text-white/90 mb-4 px-2 tracking-wide flex items-center gap-2">
           <ExternalLink size={18} className="text-cyan-400" /> 快速連結
        </h2>
        <a href="https://www.vjw.digital.go.jp/" target="_blank" rel="noopener noreferrer" className="block group">
          <GlassCard hideGloss={true} className="flex items-center justify-between active:scale-[0.98] transition-all hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]">
            <div className="flex items-center space-x-4">
              <div className="bg-pink-500/10 p-3.5 rounded-2xl text-pink-400 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform">
                <QrCode size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-pink-200 transition-colors">Visit Japan Web</h3>
                <p className="text-xs text-white/40 mt-0.5">入境審查、海關申報 QR Code</p>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-full">
               <ArrowRight size={16} className="text-white/30 group-hover:text-pink-300 transition-colors" />
            </div>
          </GlassCard>
        </a>
      </section>
    </div>
  );
};
