import { Sparkles, Wind } from 'lucide-react';
import { tokens } from '../../_lib/constants';
import { SectionHeader } from '../section-header';
import { Squiggle } from '../primitives';

interface ManifestoTabProps {
  isDarkMode: boolean;
}

export function ManifestoTab({ isDarkMode }: ManifestoTabProps) {
  return (
    <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Manifesto.'
        sub='MiaSys is a design language inspired by the persistence of growth. We reject sterile geometry in favor of botanical logic.'
        hexColor={tokens.colors.brand.lime}
        blobVariant='A'
        isDarkMode={isDarkMode}
      />
      <div className='grid lg:grid-cols-12 gap-16 items-center'>
        <div
          className={`lg:col-span-7 p-20 border ${
            isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-2xl'
          } ${tokens.radius} relative overflow-hidden group`}
        >
          <div className='absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all duration-1000 group-hover:rotate-45'>
            <Wind size={160} strokeWidth={0.5} />
          </div>
          <h3 className='font-serif text-6xl mb-10 relative z-10 dark:text-white'>Organic Logic.</h3>
          <p className={`text-2xl leading-relaxed italic relative z-10 ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}>
            &quot;MiaSys utilizes the &apos;Botanical Cut&apos;â€”a mathematical asymmetry that provides digital comfort
            through irregular curves and human-centered strokes.&quot;
          </p>
          <Squiggle className='w-48 text-amber-500 mt-16' />
        </div>
        <div className='lg:col-span-5 flex flex-col items-center gap-16'>
          <div className='relative w-80 h-80 flex items-center justify-center group'>
            <div
              className='absolute w-72 h-72 bg-[#8AC926]/10 border border-[#8AC926]/20 transition-all duration-1000 group-hover:rotate-45'
              style={{ borderRadius: '6rem 0.75rem 6rem 0.75rem' }}
            />
            <div
              className='absolute w-64 h-64 bg-[#FF595E]/10 border border-[#FF595E]/20 transition-all duration-700 group-hover:-rotate-12'
              style={{ borderRadius: '4rem 0.5rem 4rem 0.5rem' }}
            />
            <div
              className='relative w-56 h-56 bg-[#FFCA3A] flex items-center justify-center shadow-[0_40px_100px_rgba(255,202,58,0.2)] transition-all duration-500 group-hover:scale-105'
              style={{ borderRadius: '5rem 0.75rem 5rem 0.75rem' }}
            >
              <Sparkles
                size={110}
                strokeWidth={2.5}
                className='text-[#0B0E14] transition-transform group-hover:rotate-12'
              />
            </div>
            <div className='absolute top-0 right-10 w-3 h-3 rounded-full bg-rose-500' />
            <div className='absolute bottom-10 left-0 w-2 h-2 rounded-full bg-azure-500' />
          </div>
          <div className='flex gap-6'>
            <div className='px-8 py-4 rounded-full bg-zinc-100 dark:bg-[#141A24] text-xs font-black uppercase tracking-widest border border-zinc-200 dark:border-zinc-800'>
              Build 1.5.2
            </div>
            <div className='px-8 py-4 rounded-full bg-lime-500/10 text-lime-500 text-xs font-black uppercase tracking-widest border border-lime-500/20 shadow-lg shadow-lime-500/5'>
              Production
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
