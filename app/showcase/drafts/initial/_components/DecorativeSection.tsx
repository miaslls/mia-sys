'use client';

import { RotateCcw } from 'lucide-react';
import { Squiggle } from './Squiggle';
import { SectionHeader } from './SectionHeader';
import { tokens } from './constants';
import type { ThemeProps } from './types';

export function DecorativeSection({ isDarkMode }: ThemeProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-32 duration-1000'>
      <SectionHeader
        title='Signature.'
        sub='The non-functional soul of the system. Flourishes that ground the digital garden.'
        hexColor={tokens.colors.brand.rose}
        blobVariant='C'
        isDarkMode={isDarkMode}
      />
      <div className='grid gap-12 md:grid-cols-2'>
        <div
          className={`relative overflow-hidden border p-12 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white shadow-sm'} ${tokens.radius}`}
        >
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.05]'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? 'white' : 'black'} 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
          <h4 className='relative z-10 mb-12 text-[10px] font-black uppercase tracking-widest text-zinc-400'>
            Studio Texture
          </h4>
          <div className='relative z-10 flex flex-col items-center gap-8'>
            <RotateCcw className='text-zinc-300' size={64} />
            <p className='text-center text-sm italic text-zinc-500'>
              Subtle Dot Grids provide a sense of precision and scale.
            </p>
          </div>
        </div>
        <div
          className={`border p-12 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white shadow-sm'} ${tokens.radius}`}
        >
          <h4 className='mb-12 text-[10px] font-black uppercase tracking-widest text-zinc-400'>The Squiggle</h4>
          <div className='space-y-20 py-4'>
            <Squiggle className='h-8 w-full text-amber-500' />
            <Squiggle className='h-16 w-full text-rose-500/20' />
            <p className='text-center text-xs font-black uppercase tracking-widest text-zinc-500'>
              Semantic Underlines & Dividers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
