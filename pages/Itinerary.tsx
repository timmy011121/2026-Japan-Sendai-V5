
import React, { useState, useMemo } from 'react';
import { TRIP_DATA } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { Spot, SpotType } from '../types';
import { MapPin, Clock, Utensils, ShoppingBag, Camera, ChevronDown, ChevronUp, Wallet, Star, NotepadText, Car, TrainFront, LocateFixed, ExternalLink, Map as MapIcon, Split, Coffee } from 'lucide-react';

const MAP_STYLE: React.CSSProperties = { 
  border: 0, 
  filter: 'invert(90%) hue-rotate(180deg) contrast(90%) grayscale(20%)' 
};

// --- Helper Functions (Extracted for Performance) ---

const getIcon = (type: SpotType, name: string) => {
  switch (type) {
    case SpotType.RESTAURANT: return <Utensils size={18} />;
    case SpotType.DESSERT: return <Coffee size={18} />;
    case SpotType.SHOPPING: return <ShoppingBag size={18} />;
    case SpotType.TRANSPORT: 
      if (name.includes('車') || name.includes('開')) return <Car size={18} />;
      if (name.includes('新幹線') || name.includes('鐵')) return <TrainFront size={18} />;
      return <Clock size={18} />;
    case SpotType.SIGHTSEEING: return <Camera size={18} />;
    default: return <MapPin size={18} />;
  }
};

const getTheme = (spot: Spot) => {
  if (spot.isPriority) return {
    border: 'shadow-[inset_0_0_0_1px_rgba(239,68,68,0.5)]',
    bgHover: 'hover:from-red-900/20 hover:to-red-900/5',
    bgActive: 'from-red-950/40 to-red-950/20',
    textTitle: 'text-red-200',
    badge: 'bg-red-500/20 text-red-300 border-red-500/30',
    dot: 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]'
  };
  
  if (spot.type === SpotType.TRANSPORT) return {
    border: 'shadow-[inset_0_0_0_1px_rgba(96,165,250,0.4)]',
    bgHover: 'hover:from-blue-900/20 hover:to-blue-900/5',
    bgActive: 'from-blue-950/40 to-blue-950/20',
    textTitle: 'text-blue-200',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    dot: 'bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]'
  };

  if (spot.cost && spot.type !== SpotType.RESTAURANT && spot.type !== SpotType.DESSERT) return {
    border: 'shadow-[inset_0_0_0_1px_rgba(250,204,21,0.4)]',
    bgHover: 'hover:from-yellow-900/20 hover:to-yellow-900/5',
    bgActive: 'from-yellow-950/40 to-yellow-950/20',
    textTitle: 'text-yellow-200',
    badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    dot: 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]'
  };

  if (spot.type === SpotType.DESSERT) return {
    border: 'shadow-[inset_0_0_0_1px_rgba(236,72,153,0.4)]',
    bgHover: 'hover:from-pink-900/20 hover:to-pink-900/5',
    bgActive: 'from-pink-950/40 to-pink-950/20',
    textTitle: 'text-pink-200',
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    dot: 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
  };

  if (spot.type === SpotType.RESTAURANT) return {
    border: 'shadow-[inset_0_0_0_1px_rgba(249,115,22,0.3)]',
    bgHover: 'hover:from-orange-900/20 hover:to-orange-900/5',
    bgActive: 'from-orange-950/30 to-orange-950/10',
    textTitle: 'text-orange-200',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    dot: 'bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]'
  };

  return {
    border: '',
    bgHover: '',
    bgActive: 'from-white/10 to-white/5',
    textTitle: 'text-white/90',
    badge: 'bg-white/10 text-white/70 border-white/10',
    dot: 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
  };
};

// --- Components ---

// Memoized SpotCard to prevent re-renders when other list items change
const SpotCard: React.FC<{ spot: Spot; isBackup?: boolean }> = React.memo(({ spot, isBackup }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = getTheme(spot);
  const icon = getIcon(spot.type, spot.name);

  return (
    <div className={`relative flex gap-4 ${isBackup ? 'opacity-90' : ''}`}>
      {!isBackup && (
        <div className={`z-10 mt-6 min-w-[20px] h-[20px] rounded-full border-4 border-[#0a0a0a] transition-all duration-300 ${theme.dot}`} />
      )}

      <GlassCard 
        className={`flex-1 transition-all duration-300 cursor-pointer group ${theme.border} ${isExpanded ? theme.bgActive : theme.bgHover}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center mb-1.5">
             <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${theme.badge}`}>
               {isBackup ? spot.type : spot.time}
             </span>
             {spot.type === SpotType.RESTAURANT && !isBackup && (
               <span className="text-[10px] px-1.5 py-0.5 rounded border bg-yellow-500/10 text-yellow-300 border-yellow-500/20 flex items-center gap-1">
                 <Star size={8} fill="currentColor" /> 推薦
               </span>
             )}
          </div>
          {spot.cost && (
             <div className="text-[10px] font-bold text-yellow-300 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full border border-yellow-500/20 shadow-sm">
               <Wallet size={10} /> {spot.cost}
             </div>
          )}
        </div>

        <h3 className={`text-base font-bold mb-1 leading-snug group-hover:text-white transition-colors ${theme.textTitle}`}>
          {spot.name.replace('候補', '')}
        </h3>
        
        {spot.tags && spot.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {spot.tags.map((tag, i) => {
              const isHighlight = tag.includes('必') || tag.includes('重要') || tag.includes('預約') || tag.includes('推薦');
              return (
                <span key={i} className={`text-[9px] px-2 py-0.5 rounded-full border ${isHighlight ? 'bg-pink-500/20 text-pink-300 border-pink-500/30 font-bold' : 'bg-white/5 text-white/40 border-white/5'}`}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        <div className="flex justify-between items-end mt-1">
          <div className="flex items-center gap-2 text-xs text-white/50 flex-1 mr-2">
             <div className="shrink-0 opacity-70">{icon}</div>
             <span className={`transition-all ${isExpanded ? '' : 'line-clamp-1'}`}>{spot.description}</span>
          </div>
          <button className="text-white/30 shrink-0 group-hover:text-cyan-400 transition-colors">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Collapsible Content */}
        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/5' : 'grid-rows-[0fr] opacity-0'}`}>
           <div className="overflow-hidden space-y-4">
              {isExpanded && (
                  <div className="space-y-1">
                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-wider">景點介紹</div>
                    <p className="text-sm text-white/80 leading-relaxed font-light">{spot.description}</p>
                  </div>
              )}

              {isExpanded && spot.tips && (
                <div className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-2 uppercase tracking-wide">
                        <NotepadText size={12} /> 攻略 & 提示 (Tips)
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line font-light">{spot.tips}</p>
                </div>
              )}
              
              {spot.locationUrl && (
                <a 
                  href={spot.locationUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 rounded-lg font-medium text-xs transition-all"
                >
                  <MapPin size={14} /> 開啟 Google Maps
                </a>
              )}
           </div>
        </div>
      </GlassCard>
    </div>
  );
});

export const ItineraryPage: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [activePlan, setActivePlan] = useState<'A' | 'B'>('A');
  const currentDay = TRIP_DATA[selectedDayIndex];
  // Reset location when day changes, but default to Hotel
  const [activeMapLocation, setActiveMapLocation] = useState<string>(currentDay.hotel.name);

  // Sync map location when day changes
  React.useEffect(() => {
    setActiveMapLocation(currentDay.hotel.name);
  }, [currentDay]);

  const { primarySpots, backupSpots } = useMemo(() => {
    const sourceSpots = currentDay.plans ? (currentDay.plans[activePlan]?.spots || []) : currentDay.spots;
    
    // Single pass filtering
    const primary: Spot[] = [];
    const backup: Spot[] = [];

    for (const spot of sourceSpots) {
      if (spot.id.includes('bk') || spot.name.includes('候補')) {
        backup.push(spot);
      } else {
        primary.push(spot);
      }
    }
    return { primarySpots: primary, backupSpots: backup };
  }, [currentDay, activePlan]);

  return (
    <div className="pb-24 animate-fade-in h-full flex flex-col">
      {/* Date Selector */}
      <div className="sticky top-0 z-40 bg-transparent pb-2 -mx-4 px-4 pt-2 backdrop-blur-[2px]">
        <div className="flex overflow-x-auto no-scrollbar space-x-3 py-2 px-1">
          {TRIP_DATA.map((day, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedDayIndex(idx); setActivePlan('A'); }}
              className={`
                flex flex-col items-center justify-center min-w-[4.5rem] py-2.5 px-1 rounded-2xl transition-all duration-300 active:scale-95
                ${selectedDayIndex === idx 
                  ? 'bg-cyan-500/20 shadow-[inset_0_0_0_1px_rgba(6,182,212,0.3)] shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-white/5 shadow-glass-thick text-white/40 hover:bg-white/10'}
              `}
            >
              <span className={`text-[10px] font-bold tracking-wider mb-1 ${selectedDayIndex === idx ? 'text-cyan-300' : ''}`}>{day.dayOfWeek}</span>
              <span className={`text-xl font-black font-mono ${selectedDayIndex === idx ? 'text-white' : ''}`}>{day.date.split('/')[1]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Plan Selector */}
      {currentDay.plans && (
        <div className="flex gap-3 mb-4 mt-2">
           {Object.keys(currentDay.plans).map((planKey) => {
              const pKey = planKey as 'A' | 'B';
              const label = currentDay.plans![pKey].label;
              const isActive = activePlan === pKey;
              return (
                <button
                  key={pKey}
                  onClick={() => setActivePlan(pKey)}
                  className={`
                    flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300
                    ${isActive 
                       ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-white shadow-[inset_0_0_0_1px_rgba(6,182,212,0.4)] shadow-glow' 
                       : 'bg-white/5 text-white/40 hover:bg-white/10'}
                  `}
                >
                   {isActive && <Split size={14} className="animate-pulse" />}
                   {label}
                </button>
              );
           })}
        </div>
      )}

      {/* Weather & Map */}
      <div className="space-y-4 mb-6 mt-2">
          <GlassCard className="flex items-center justify-between !py-4 !px-6 from-blue-950/60 to-white/[0.05]">
             <div className="flex items-center gap-4">
                 <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{currentDay.weather.icon}</span>
                 <div className="flex flex-col">
                    <span className="text-3xl font-light text-white font-mono tracking-tight">{currentDay.weather.temp}</span>
                 </div>
             </div>
             <div className="text-right">
                <span className="text-sm font-bold text-cyan-200 block tracking-wide">{currentDay.weather.condition}</span>
                <span className="text-[10px] text-white/40 flex items-center justify-end gap-1 mt-1 font-medium bg-black/20 px-2 py-0.5 rounded-full w-fit ml-auto shadow-inner-deep">
                   <MapPin size={10} /> {currentDay.hotel.address.split(' ')[0] || 'Japan'}
                </span>
             </div>
          </GlassCard>

          <GlassCard className="!p-0 overflow-hidden">
             <div className="h-56 w-full relative bg-[#1a1a1a]">
               <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white/90 border border-white/10 flex items-center gap-1.5 shadow-lg">
                 <LocateFixed size={12} className="text-cyan-400" />
                 <span className="font-medium truncate max-w-[200px]">{activeMapLocation}</span>
               </div>
               <iframe
                 title="Map"
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 style={MAP_STYLE}
                 src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapLocation)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               />
               <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
             </div>

             <div className="p-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-3 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                   <MapIcon size={12} /> 點擊切換地圖地點
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
                   <button 
                      onClick={() => setActiveMapLocation(currentDay.hotel.name)}
                      className={`
                        shrink-0 whitespace-nowrap px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300
                        ${activeMapLocation === currentDay.hotel.name ? 'bg-cyan-500/20 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(6,182,212,0.3)]' : 'bg-white/5 text-white/60 hover:bg-white/10 shadow-glass-thick'}
                      `}
                   >
                      🏨 住宿
                   </button>
                   {primarySpots.map(spot => (
                      <button
                        key={spot.id}
                        onClick={() => setActiveMapLocation(spot.name)}
                        className={`
                            shrink-0 whitespace-nowrap px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300
                            ${activeMapLocation === spot.name ? 'bg-cyan-500/20 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(6,182,212,0.3)]' : 'bg-white/5 text-white/60 hover:bg-white/10 shadow-glass-thick'}
                        `}
                      >
                         {spot.name}
                      </button>
                   ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                   <a 
                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapLocation)}`}
                     target="_blank"
                     rel="noreferrer"
                     className="text-xs flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium bg-cyan-900/20 px-3 py-1.5 rounded-lg border border-cyan-500/20"
                   >
                      <ExternalLink size={12} /> 導航至此地點
                   </a>
                </div>
             </div>
          </GlassCard>
      </div>

      {/* Timeline */}
      <div className="relative pl-4 space-y-8">
        <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent opacity-50" />
        {primarySpots.map((spot) => <SpotCard key={spot.id} spot={spot} />)}
      </div>

      {/* Backups */}
      {backupSpots.length > 0 && (
        <div className="mt-12 pl-4 pt-6 border-t border-dashed border-white/10">
          <h3 className="text-sm font-bold text-white/60 mb-4 flex items-center uppercase tracking-wider">
            <Star className="text-yellow-400 mr-2" size={16} fill="currentColor" />
            候補 / 額外推薦美食
          </h3>
          <div className="space-y-4">
            {backupSpots.map((spot) => <SpotCard key={spot.id} spot={spot} isBackup />)}
          </div>
        </div>
      )}
    </div>
  );
};
