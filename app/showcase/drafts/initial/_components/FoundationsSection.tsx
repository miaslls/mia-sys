'use client';

import { ColorCard } from './ColorCard';
import { SectionHeader } from './SectionHeader';
import { tokens, typographyPulse } from './constants';
import type { ThemeProps } from './types';

export function FoundationsSection({ isDarkMode }: ThemeProps) {
  return (
    <div className='animate-in fade-in slide-in-from-bottom-8 space-y-32 duration-1000'>
      <SectionHeader
        title='Foundations.'
        sub='The core pigments and typography that define the MiaSys visual pulse.'
        hexColor={tokens.colors.brand.rose}
        blobVariant='B'
        isDarkMode={isDarkMode}
      />

      <section className='space-y-8'>
        <h3 className='text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400'>Core Pigments</h3>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <ColorCard name='Amber' hex='#FFCA3A' desc='Primary action and brand anchor.' isDarkMode={isDarkMode} />
          <ColorCard name='Rose' hex='#FF595E' desc='Alert and emotional highlight.' isDarkMode={isDarkMode} />
          <ColorCard name='Lime' hex='#8AC926' desc='Success and growth state indicator.' isDarkMode={isDarkMode} />
          <ColorCard name='Azure' hex='#1982C4' desc='Supportive structural tone.' isDarkMode={isDarkMode} />
        </div>
      </section>

      <section className='space-y-8'>
        <h3 className='text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400'>Typographic Pulse</h3>
        <div
          className={`border p-10 ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
        >
          {typographyPulse.map((typeSpec) => (
            <div
              key={typeSpec.label}
              className='flex flex-col gap-4 border-b border-zinc-100 py-8 last:border-0 dark:border-zinc-800 lg:flex-row lg:items-baseline'
            >
              <span className='text-[10px] font-black uppercase tracking-widest text-rose-500 lg:w-48'>
                {typeSpec.label}
              </span>
              <p className={`${typeSpec.font} ${typeSpec.size} ${typeSpec.weight} tracking-tight dark:text-white`}>
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
