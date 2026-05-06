'use client';

import { Type } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { tokens } from './constants';
import type { ThemeProps } from './types';

export function ComponentsSection({ isDarkMode }: ThemeProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-32 duration-1000'>
      <SectionHeader
        title='Components.'
        sub='Interactive modules designed for high-velocity user tasks.'
        hexColor={tokens.colors.brand.azure}
        blobVariant='A'
        isDarkMode={isDarkMode}
      />
      <div className='grid gap-12 md:grid-cols-2'>
        <section className='space-y-8'>
          <h4 className='text-[10px] font-black uppercase tracking-widest text-zinc-400'>Action Drivers</h4>
          <div
            className={`flex flex-wrap gap-4 border p-10 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
          >
            <button className={`bg-[#FFCA3A] px-8 py-3 font-bold text-black transition-all hover:scale-105 active:scale-95 ${tokens.radius}`}>
              Primary
            </button>
            <button
              className={`border-2 border-zinc-200 px-8 py-3 font-bold transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 ${tokens.radius}`}
            >
              Ghost
            </button>
            <button className={`bg-[#FF595E] px-8 py-3 font-bold text-white transition-all hover:brightness-110 active:scale-95 ${tokens.radius}`}>
              Danger
            </button>
          </div>
        </section>
        <section className='space-y-8'>
          <h4 className='text-[10px] font-black uppercase tracking-widest text-zinc-400'>Entry Fields</h4>
          <div
            className={`space-y-6 border p-10 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
          >
            <div className='space-y-2'>
              <label className='text-[10px] font-black uppercase text-amber-500'>Focus State</label>
              <div className='flex w-full items-center gap-3 rounded-2xl border-2 border-amber-500 p-3 shadow-lg shadow-amber-500/5'>
                <Type size={16} className='text-amber-500' />
                <input
                  className='w-full border-none bg-transparent text-sm outline-none dark:text-white'
                  defaultValue='Active interaction'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
