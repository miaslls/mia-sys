import React from 'react';
import { Search } from 'lucide-react';
import { strokeWidthOptions, tokens } from '../../_lib/constants';
import type { IconEntry, StrokeWidthOption } from '../../_lib/types';
import { SectionHeader } from '../section-header';

interface IconsTabProps {
  isDarkMode: boolean;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  strokeWidth: StrokeWidthOption;
  onStrokeWidthChange: (strokeWidth: StrokeWidthOption) => void;
  filteredIcons: IconEntry[];
}

export function IconsTab({
  isDarkMode,
  searchQuery,
  onSearchQueryChange,
  strokeWidth,
  onStrokeWidthChange,
  filteredIcons,
}: IconsTabProps) {
  return (
    <div className='space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Icons.'
        sub='Discovery engine for 100 system tokens. Click any tile to copy name.'
        hexColor={tokens.colors.brand.lime}
        blobVariant='B'
        isDarkMode={isDarkMode}
      />

      <div
        className={`sticky top-32 z-40 p-8 border backdrop-blur-3xl rounded-[4rem] ${
          isDarkMode ? 'bg-[#141A24]/90 border-[#232D3D]' : 'bg-white/90 border-zinc-100 shadow-2xl'
        } flex flex-col md:flex-row gap-8 items-center`}
      >
        <div className='flex-grow flex items-center gap-6 px-8 py-5 bg-zinc-100 dark:bg-black/30 rounded-3xl w-full border border-zinc-200/50 dark:border-white/5'>
          <Search size={24} className='text-zinc-400' />
          <input
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder='Filter 100+ tokens...'
            className='bg-transparent border-none outline-none text-xl w-full font-medium dark:text-white'
          />
        </div>
        <div className='flex items-center p-2 border border-zinc-200 dark:border-[#232D3D] rounded-2xl bg-white dark:bg-[#0B0E14] shadow-inner'>
          {strokeWidthOptions.map((w) => (
            <button
              key={w}
              onClick={() => onStrokeWidthChange(w)}
              className={`px-10 py-4 text-xs font-black uppercase rounded-xl transition-all ${
                strokeWidth === w ? 'bg-amber-500 text-black shadow-xl scale-105' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {w === 1.5 ? 'Utility' : 'Brand'}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8'>
        {filteredIcons.map((icon, index) => (
          <button
            key={`${icon.category}-${icon.name}-${index}`}
            className={`group p-8 border transition-all duration-500 ${
              isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm hover:shadow-2xl hover:border-amber-500'
            } ${tokens.radius} flex flex-col items-center gap-6 hover:-translate-y-3`}
          >
            <div
              className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${
                isDarkMode ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-50 text-zinc-400'
              } group-hover:rotate-12 group-hover:scale-125 shadow-inner`}
            >
              {React.createElement(icon.icon, {
                size: 32,
                strokeWidth,
                className: 'group-hover:text-amber-500',
              })}
            </div>
            <span className='text-[10px] font-black uppercase text-zinc-400 tracking-tighter truncate w-full text-center'>
              {icon.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
