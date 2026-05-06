import { Blob } from './primitives';
import type { SectionHeaderProps } from '../_lib/types';

export function SectionHeader({
  title,
  sub,
  isDarkMode,
  hexColor = '#FF595E',
  blobVariant = 'A',
}: SectionHeaderProps) {
  return (
    <header className='relative mb-24 text-center flex flex-col items-center'>
      <Blob
        className='absolute -top-32 w-[36rem] h-[32rem] opacity-15 dark:opacity-5 transition-all duration-1000'
        color={hexColor}
        variant={blobVariant}
      />
      <div className='relative z-10 flex flex-col items-center'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-2 h-2 rounded-full bg-rose-500 animate-pulse' />
          <div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-75' />
          <div className='w-2 h-2 rounded-full bg-lime-500 animate-pulse delay-150' />
        </div>
        <h2
          className={`font-serif text-7xl md:text-9xl tracking-tighter transition-colors mb-8 ${
            isDarkMode ? 'text-white' : 'text-[#0B0E14]'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-2xl font-medium max-w-3xl leading-relaxed text-center transition-colors ${
            isDarkMode ? 'text-slate-400' : 'text-zinc-500'
          }`}
        >
          {sub}
        </p>
      </div>
    </header>
  );
}
