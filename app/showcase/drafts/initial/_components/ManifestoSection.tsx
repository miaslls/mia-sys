'use client';

import { Sparkles } from 'lucide-react';
import { tokens } from './constants';
import { SectionHeader } from './SectionHeader';
import type { ThemeProps } from './types';

export function ManifestoSection({ isDarkMode }: ThemeProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-32 duration-1000'>
      <SectionHeader
        title='Manifesto.'
        sub='MiaSys is a botanical design system built to reject the sterile. We craft software that feels grown, not manufactured.'
        hexColor={tokens.colors.brand.lime}
        blobVariant='A'
        isDarkMode={isDarkMode}
      />
      <div className='grid gap-12 md:grid-cols-2'>
        <div
          className={`border p-12 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white shadow-sm'} ${tokens.radius}`}
        >
          <h3 className='mb-6 font-serif text-3xl'>Organic Logic.</h3>
          <p className={`leading-relaxed italic ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}>
            &quot;Nature does not follow a perfect grid. MiaSys utilizes the
            &apos;Botanical Cut&apos;â€”a mathematical asymmetry that provides digital comfort through
            irregular curves and human strokes.&quot;
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div
            className='flex h-48 w-48 items-center justify-center bg-[#FFCA3A] shadow-[0_0_80px_rgba(255,202,58,0.2)] transition-all duration-1000 hover:rotate-12 animate-pulse'
            style={{ borderRadius: '2rem 0.375rem 2rem 0.375rem' }}
          >
            <Sparkles size={80} strokeWidth={2.5} className='text-black' />
          </div>
        </div>
      </div>
    </div>
  );
}
