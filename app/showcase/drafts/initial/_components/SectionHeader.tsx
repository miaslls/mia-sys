'use client';

import { Blob } from './Blob';
import type { SectionHeaderProps } from './types';

export function SectionHeader({
  title,
  sub,
  isDarkMode,
  hexColor = '#FF595E',
  blobVariant = 'A',
}: SectionHeaderProps) {
  return (
    <header className='relative mb-16'>
      <Blob
        className='absolute -top-32 -left-32 w-96 h-96 opacity-10 dark:opacity-5 transition-all duration-1000'
        color={hexColor}
        variant={blobVariant}
      />
      <div className='relative z-10'>
        <div className='mb-4 flex items-center gap-3'>
          <div className='h-10 w-2 rounded-full' style={{ backgroundColor: hexColor }} />
          <h2
            className={`font-serif text-6xl tracking-tighter transition-colors md:text-7xl ${isDarkMode ? 'text-white' : 'text-[#0B0E14]'}`}
          >
            {title}
          </h2>
        </div>
        <p
          className={`max-w-2xl text-xl font-medium leading-relaxed transition-colors ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}
        >
          {sub}
        </p>
      </div>
    </header>
  );
}
