'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { tokens } from './constants';
import type { IconStrokeWidth, IconWithCategory, ThemeProps } from './types';

interface IconsSectionProps extends ThemeProps {
  searchQuery: string;
  strokeWidth: IconStrokeWidth;
  filteredIcons: IconWithCategory[];
  onSearchChange: (value: string) => void;
  onStrokeWidthChange: (width: IconStrokeWidth) => void;
}

export function IconsSection({
  isDarkMode,
  searchQuery,
  strokeWidth,
  filteredIcons,
  onSearchChange,
  onStrokeWidthChange,
}: IconsSectionProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-24 duration-1000'>
      <div className='flex flex-col justify-between gap-12 md:flex-row md:items-end'>
        <SectionHeader
          title='Icons.'
          sub='The discovery engine for 100 system tokens. Click any tile to copy name.'
          hexColor={tokens.colors.brand.lime}
          blobVariant='B'
          isDarkMode={isDarkMode}
        />
        <div className='relative z-10 flex flex-col gap-6 md:w-96'>
          <div
            className={`flex items-center gap-3 rounded-[2rem] border p-4 ${
              isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white shadow-sm'
            }`}
          >
            <Search size={18} className='text-zinc-400' />
            <input
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder='Search 100+ tokens...'
              className='w-full border-none bg-transparent text-sm font-medium outline-none dark:text-white'
            />
          </div>
          <div
            className={`flex items-center rounded-2xl border p-1 ${
              isDarkMode ? 'border-[#232D3D] bg-[#0B0E14]' : 'bg-zinc-100'
            }`}
          >
            {[1.5, 2.5].map((width) => (
              <button
                key={width}
                onClick={() => onStrokeWidthChange(width as IconStrokeWidth)}
                className={`flex-1 rounded-xl py-2 text-[10px] font-black uppercase transition-all ${
                  strokeWidth === width ? 'bg-amber-500 text-black shadow-md' : 'text-zinc-400'
                }`}
              >
                {width === 1.5 ? 'Utility' : 'Brand'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
        {filteredIcons.map((iconItem, index) => (
          <button
            key={`${iconItem.name}-${index}`}
            onClick={() => {}}
            className={`group flex flex-col items-center gap-3 border p-4 transition-all duration-500 ${
              isDarkMode
                ? 'border-[#232D3D] bg-[#141A24]'
                : 'border-zinc-100 bg-white shadow-sm hover:border-amber-500 hover:shadow-xl'
            } ${tokens.radius}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-inner transition-all group-hover:rotate-6 group-hover:scale-110 ${
                isDarkMode ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-50 text-zinc-400'
              }`}
            >
              {React.createElement(iconItem.icon, {
                size: 20,
                strokeWidth,
                className: 'group-hover:text-amber-500',
              })}
            </div>
            <span className='w-full truncate text-center text-[8px] font-black uppercase tracking-tighter text-zinc-400'>
              {iconItem.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
