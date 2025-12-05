
import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_CHECKLIST } from '../constants';
import { ChecklistItem } from '../types';
import { Trash2, Plus, Sparkles, ChevronDown, Pencil, Check, ArrowUp, ArrowDown } from 'lucide-react';

export const ChecklistPage: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('自訂');
  const [isEditing, setIsEditing] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['自訂']));

  useEffect(() => {
    const saved = localStorage.getItem('japan_trip_checklist_v2');
    setItems(saved ? JSON.parse(saved) : INITIAL_CHECKLIST);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('japan_trip_checklist_v2', JSON.stringify(items));
    }
  }, [items]);

  const toggleItem = (id: string) => {
    if (isEditing) return;
    setItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    
    setItems(prev => [{
      id: Date.now().toString(),
      text: newItemText.trim(),
      category: selectedCategory,
      checked: false
    }, ...prev]);
    
    setNewItemText('');
    setExpandedCategories(prev => new Set(prev).add(selectedCategory));
  };

  const deleteItem = (id: string) => {
    if (window.confirm('確定要刪除此項目嗎？')) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  // Optimized sorting logic (O(N) vs O(3N))
  const moveItem = (id: string, direction: 'up' | 'down') => {
    setItems(prev => {
      const index = prev.findIndex(i => i.id === id);
      if (index === -1) return prev;
      
      const currentCategory = prev[index].category;
      let swapIndex = -1;

      // Find nearest neighbor with same category
      if (direction === 'up') {
        for (let i = index - 1; i >= 0; i--) {
          if (prev[i].category === currentCategory) {
            swapIndex = i;
            break;
          }
        }
      } else {
        for (let i = index + 1; i < prev.length; i++) {
          if (prev[i].category === currentCategory) {
            swapIndex = i;
            break;
          }
        }
      }

      if (swapIndex === -1) return prev;

      const newItems = [...prev];
      [newItems[index], newItems[swapIndex]] = [newItems[swapIndex], newItems[index]];
      return newItems;
    });
  };

  const clearAllChecked = () => {
    if (window.confirm('確定要清除所有已選取的項目嗎？')) {
      setItems(prev => prev.map(item => ({ ...item, checked: false })));
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      newSet.has(category) ? newSet.delete(category) : newSet.add(category);
      return newSet;
    });
  };

  const { categories, progress, hasCheckedItems, availableCategories } = useMemo(() => {
    const catsSet = new Set<string>();
    let checkedCount = 0;
    
    items.forEach(i => {
      catsSet.add(i.category);
      if (i.checked) checkedCount++;
    });

    const cats = Array.from(catsSet).sort((a, b) => a === '自訂' ? -1 : b === '自訂' ? 1 : 0);
    
    // Calculate available categories for dropdown (Base + Current)
    const baseCats = new Set(INITIAL_CHECKLIST.map(i => i.category));
    baseCats.add('自訂');
    items.forEach(i => baseCats.add(i.category));
    const availCats = Array.from(baseCats).sort((a, b) => a === '自訂' ? -1 : b === '自訂' ? 1 : 0);

    return { 
      categories: cats, 
      progress: items.length > 0 ? (checkedCount / items.length) * 100 : 0, 
      hasCheckedItems: checkedCount > 0,
      availableCategories: availCats
    };
  }, [items]);

  return (
    <div className="pb-24 space-y-6 animate-fade-in relative z-10 px-1">
      <header className="px-2 pt-2 sticky top-0 z-30 pb-4 backdrop-blur-xl -mx-5 px-6 bg-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
           <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2 drop-shadow-md">
             <Sparkles className="text-cyan-400" size={20} /> 
             {isEditing ? '編輯清單' : '行前準備'}
           </h1>
           <div className="flex items-center gap-2">
             {!isEditing && hasCheckedItems && (
               <button 
                 onClick={clearAllChecked}
                 className="text-[10px] font-bold text-red-300 bg-red-500/10 px-3 py-1.5 rounded-full hover:bg-red-500/20 transition-all border border-red-500/20 active:scale-95 flex items-center gap-1 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
               >
                 <Trash2 size={10} /> 重置
               </button>
             )}
             <button
               onClick={() => setIsEditing(!isEditing)}
               className={`
                 text-[10px] font-bold px-3 py-1.5 rounded-full transition-all border active:scale-95 flex items-center gap-1 shadow-glass-thick
                 ${isEditing 
                   ? 'text-green-300 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]' 
                   : 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]'}
               `}
             >
               {isEditing ? <><Check size={10} /> 完成</> : <><Pencil size={10} /> 編輯</>}
             </button>
           </div>
        </div>
        
        <div className={`relative transition-all duration-500 mt-6 ${isEditing ? 'opacity-30 grayscale' : 'opacity-100'}`}>
          <div className="h-3 w-full bg-black/40 rounded-full shadow-inner-deep border-b border-white/5 overflow-hidden backdrop-blur-sm">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-glow transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="absolute right-0 -top-6 text-[10px] font-mono font-bold text-cyan-300 tracking-wider bg-black/40 px-2 py-0.5 rounded-md border border-white/5 backdrop-blur-md shadow-lg">
            {Math.round(progress)}% READY
          </div>
        </div>
      </header>

      <form onSubmit={addItem} className="relative group mx-1">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[20px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center bg-black/30 shadow-inner-deep rounded-[20px] border border-white/10 p-1.5 transition-all focus-within:border-white/30 focus-within:bg-black/50 hover:bg-black/40 gap-2">
           <div className="relative shrink-0">
             <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/5 text-white/80 text-xs font-bold py-3 pl-3 pr-8 rounded-xl border border-white/5 outline-none focus:bg-white/10 focus:border-white/20 transition-colors w-[80px] truncate"
             >
               {availableCategories.map(cat => (
                 <option key={cat} value={cat} className="bg-gray-900 text-white">{cat}</option>
               ))}
             </select>
             <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
           </div>
           <input 
             type="text" 
             value={newItemText}
             onChange={(e) => setNewItemText(e.target.value)}
             placeholder={isEditing ? "新增項目..." : "新增待辦事項..."}
             className="flex-1 bg-transparent border-none outline-none text-white px-2 py-3 placeholder:text-white/30 text-sm font-medium min-w-0"
           />
           <button 
             type="submit"
             disabled={!newItemText.trim()}
             className="p-2.5 rounded-2xl bg-white/10 text-white/70 hover:bg-cyan-500 hover:text-white hover:shadow-glow transition-all disabled:opacity-30 disabled:hover:bg-white/10 shrink-0"
           >
             <Plus size={18} />
           </button>
        </div>
      </form>

      <div className="space-y-4">
        {categories.map(category => {
           const categoryItems = items.filter(i => i.category === category);
           const isExpanded = expandedCategories.has(category);
           const checkedCount = categoryItems.filter(i => i.checked).length;
           const totalCount = categoryItems.length;
           const isComplete = totalCount > 0 && checkedCount === totalCount;

           return (
            <div key={category} className={`group relative bg-white/[0.1] backdrop-blur-3xl border ${isEditing ? 'border-cyan-500/30' : 'border-white/[0.3]'} shadow-lg rounded-[24px] overflow-hidden transition-all duration-300`}>
              <button 
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-5 cursor-pointer hover:bg-white/[0.05] transition-colors outline-none"
              >
                <div className="flex items-center gap-3">
                   <div className={`w-1.5 h-6 rounded-full transition-colors duration-300 ${isComplete && !isEditing ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]'}`} />
                   <div className="text-left">
                     <h3 className="text-base font-bold text-white tracking-wide group-hover:text-white transition-colors">{category}</h3>
                     <span className="text-[10px] font-medium text-white/50 tracking-wider uppercase">
                       {isEditing ? `${totalCount} 個項目` : `${checkedCount} / ${totalCount} 完成`}
                     </span>
                   </div>
                </div>
                <div className={`p-2 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 ${isExpanded ? 'rotate-180 bg-white/10 text-white' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              <div className={`grid transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                 <div className="overflow-hidden">
                    <div className="bg-black/[0.2] border-t border-white/5 p-2 space-y-1 shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)]">
                      {categoryItems.map((item, index) => (
                        <div 
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`
                            relative flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300
                            ${isEditing ? 'cursor-default bg-white/[0.03] border border-white/5' : item.checked ? 'cursor-pointer opacity-50 grayscale-[0.5]' : 'cursor-pointer hover:bg-white/5 active:scale-[0.99]'}
                          `}
                        >
                           {isEditing ? (
                             <div className="flex flex-col gap-1 shrink-0">
                               <button 
                                 onClick={(e) => { e.stopPropagation(); moveItem(item.id, 'up'); }}
                                 disabled={index === 0}
                                 className="p-1 hover:bg-white/10 rounded text-white/50 hover:text-cyan-300 disabled:opacity-20 disabled:hover:text-white/50 transition-colors"
                               >
                                 <ArrowUp size={14} />
                               </button>
                               <button 
                                 onClick={(e) => { e.stopPropagation(); moveItem(item.id, 'down'); }}
                                 disabled={index === categoryItems.length - 1}
                                 className="p-1 hover:bg-white/10 rounded text-white/50 hover:text-cyan-300 disabled:opacity-20 disabled:hover:text-white/50 transition-colors"
                               >
                                 <ArrowDown size={14} />
                               </button>
                             </div>
                           ) : (
                             <div className={`relative w-5 h-5 rounded-full shrink-0 transition-all duration-500 flex items-center justify-center ${item.checked ? 'bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_12px_rgba(74,222,128,0.8)] scale-105' : 'bg-black/40 border border-white/10 shadow-inner-deep'}`}>
                               {item.checked && <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse" />}
                             </div>
                           )}
                           
                           <span className={`flex-1 text-sm font-medium transition-all duration-300 leading-snug ${!isEditing && item.checked ? 'text-white/40' : 'text-white/90 drop-shadow-sm'}`}>
                             {item.text}
                           </span>

                           {isEditing ? (
                             <button onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }} className="p-2 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-colors">
                               <Trash2 size={16} />
                             </button>
                           ) : (
                             !item.checked && <div className="w-1 h-1 rounded-full bg-white/20" />
                           )}
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
           );
        })}
      </div>
    </div>
  );
};
