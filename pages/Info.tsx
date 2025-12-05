
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Snowflake, AlertTriangle, ShieldAlert, ChevronDown, Phone } from 'lucide-react';

const SECTIONS = [
  {
    id: 'outfit',
    title: '1月穿搭指南 (東北/輕井澤)',
    icon: <Snowflake size={24} />,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-500/20',
    content: (
      <div className="space-y-3 text-white/80 text-sm leading-relaxed">
        <p>
          <strong className="text-white block mb-1">平均氣溫: -5°C ~ 5°C</strong>
          銀山溫泉、藏王樹冰極冷，務必做好防寒防滑。
        </p>
        <ul className="list-disc pl-4 space-y-2 text-white/70">
          <li><span className="text-white font-medium">上半身:</span> 發熱衣 + 毛衣/刷毛T + 防風防水羽絨外套 (洋蔥式)。</li>
          <li><span className="text-white font-medium">下半身:</span> 發熱褲 + 防風褲/厚牛仔褲。</li>
          <li><span className="text-white font-medium">鞋子:</span> <span className="text-yellow-400">絕對需要防滑防水靴子</span>。雪地易滑，一般球鞋危險。</li>
          <li><span className="text-white font-medium">配件:</span> 毛帽 (遮耳)、圍巾、防水手套、暖暖包。</li>
        </ul>
      </div>
    )
  },
  {
    id: 'taboos',
    title: '注意事項 & 禁忌',
    icon: <AlertTriangle size={24} />,
    color: 'text-red-300',
    borderColor: 'border-red-500/20',
    content: (
      <ul className="space-y-3 text-sm text-white/80">
        <li className="flex gap-3">
           <span className="bg-red-500/20 text-red-300 px-2 rounded h-fit whitespace-nowrap text-xs py-0.5">入境</span>
           <span>肉類 (含肉乾)、新鮮蔬果嚴禁攜帶入境。</span>
        </li>
        <li className="flex gap-3">
           <span className="bg-red-500/20 text-red-300 px-2 rounded h-fit whitespace-nowrap text-xs py-0.5">溫泉</span>
           <span>刺青者通常禁止進入大眾池 (建議使用貸切風呂/個人池)。毛巾不可入水。</span>
        </li>
        <li className="flex gap-3">
           <span className="bg-red-500/20 text-red-300 px-2 rounded h-fit whitespace-nowrap text-xs py-0.5">交通</span>
           <span>電車內請勿通話。新幹線需預約大型行李席位 (若行李超大)。</span>
        </li>
        <li className="flex gap-3">
           <span className="bg-red-500/20 text-red-300 px-2 rounded h-fit whitespace-nowrap text-xs py-0.5">雪地</span>
           <span>在屋簷下行走小心落雪。走路重心放前，小步慢走防滑倒。</span>
        </li>
      </ul>
    )
  },
  {
    id: 'emergency',
    title: '緊急聯絡人',
    icon: <ShieldAlert size={24} />,
    color: 'text-green-300',
    borderColor: 'border-green-500/20',
    content: (
      <>
        <div className="grid grid-cols-2 gap-4">
           <a href="tel:110" className="bg-white/5 p-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition">
             <div className="bg-red-500/20 p-2 rounded-full text-red-400"><Phone size={18}/></div>
             <div>
               <div className="text-xs text-white/50">警察局</div>
               <div className="text-xl font-bold">110</div>
             </div>
           </a>
           <a href="tel:119" className="bg-white/5 p-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition">
             <div className="bg-red-500/20 p-2 rounded-full text-red-400"><Phone size={18}/></div>
             <div>
               <div className="text-xs text-white/50">救護車/火警</div>
               <div className="text-xl font-bold">119</div>
             </div>
           </a>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <h3 className="text-sm font-bold text-white/70 mb-2">台北駐日經濟文化代表處</h3>
          <p className="text-xs text-white/50 mb-1">東京都港區白金台 5-20-2</p>
          <a href="tel:+81-3-3280-7811" className="text-cyan-400 text-lg font-mono block">+81-3-3280-7811</a>
          <p className="text-xs text-red-400 mt-2 font-bold">旅外國人急難救助: +81-80-1009-7179</p>
        </div>
      </>
    )
  }
];

export const InfoPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('outfit');

  return (
    <div className="pb-24 space-y-4 animate-fade-in pt-4">
      <h1 className="text-3xl font-bold px-2 mb-6">旅遊資訊</h1>
      {SECTIONS.map((section) => (
        <div key={section.id} className="relative">
          <GlassCard className={`transition-all duration-300 !p-0 overflow-hidden ${section.borderColor} ${openSection === section.id ? 'bg-white/15' : 'hover:bg-white/10'}`}>
            <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)} className="w-full flex items-center justify-between p-5">
              <div className={`flex items-center gap-3 ${section.color}`}>
                {section.icon}
                <h2 className="text-lg font-bold">{section.title}</h2>
              </div>
              <div className={`transition-transform duration-300 ${openSection === section.id ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} className="text-white/50" />
              </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${openSection === section.id ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
              <div className="pt-2 border-t border-white/10">{section.content}</div>
            </div>
          </GlassCard>
        </div>
      ))}
    </div>
  );
};
