'use client';

import { Monitor } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { breakpoints, tokens } from './constants';
import type { ThemeProps } from './types';

export function ArchitectureSection({ isDarkMode }: ThemeProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-32 duration-1000'>
      <SectionHeader
        title='Architecture.'
        sub='The mathematical grid and responsive rules that hold the garden together.'
        hexColor={tokens.colors.brand.amber}
        blobVariant='C'
        isDarkMode={isDarkMode}
      />
      <div className='grid gap-12 lg:grid-cols-2'>
        <div
          className={`border p-10 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
        >
          <h4 className='mb-8 font-serif text-3xl dark:text-white'>The 8pt Grid.</h4>
          <div className='space-y-6'>
            {tokens.spacing.map((spacingStep) => (
              <div key={spacingStep.name} className='group flex items-center gap-6'>
                <span className='w-12 font-mono text-[9px] font-black uppercase text-zinc-400'>
                  {spacingStep.name}
                </span>
                <div
                  className='h-4 flex-grow border-x-2 border-amber-500 bg-amber-500/10 transition-all group-hover:bg-amber-500/30'
                  style={{ width: spacingStep.value }}
                />
                <span className='w-16 text-right font-mono text-[10px] text-zinc-500'>{spacingStep.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center border p-10 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
        >
          <Monitor className='mb-6 text-zinc-300' size={48} />
          <h4 className='mb-4 font-serif text-2xl dark:text-white'>Responsive Breakpoints</h4>
          <div className='w-full space-y-3'>
            {breakpoints.map((breakpoint) => (
              <div
                key={breakpoint}
                className='flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-white/5 dark:bg-black/20'
              >
                <span className='text-[10px] font-black uppercase text-amber-500'>
                  {breakpoint.split(':')[0]}
                </span>
                <span className='font-mono text-xs dark:text-slate-400'>{breakpoint.split(':')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
