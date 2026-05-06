import { Monitor } from 'lucide-react';
import { tokens } from '../../_lib/constants';
import { SectionHeader } from '../section-header';

interface ArchitectureTabProps {
  isDarkMode: boolean;
}

const breakpoints = [
  { t: 'sm', w: '640px', c: 'Mobile Landscape' },
  { t: 'md', w: '768px', c: 'Tablets (Vertical)' },
  { t: 'lg', w: '1024px', c: 'Laptops / Desktop' },
  { t: 'xl', w: '1280px', c: 'Widescreen' },
];

export function ArchitectureTab({ isDarkMode }: ArchitectureTabProps) {
  return (
    <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Architecture.'
        sub='The mathematical grid and responsive rules that hold the garden together.'
        hexColor={tokens.colors.brand.amber}
        blobVariant='C'
        isDarkMode={isDarkMode}
      />

      <div className='grid lg:grid-cols-2 gap-16'>
        <div
          className={`p-12 lg:p-16 border ${
            isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'
          } ${tokens.radius}`}
        >
          <div className='flex items-center gap-4 mb-12'>
            <div className='w-1.5 h-8 bg-amber-500 rounded-full' />
            <h4 className='font-serif text-4xl dark:text-white'>The 8pt Grid.</h4>
          </div>
          <div className='space-y-10'>
            {tokens.spacing.map((s) => (
              <div key={s.name} className='flex items-center gap-10 group'>
                <span className='w-12 font-mono text-[10px] text-zinc-400 uppercase font-black tracking-widest'>{s.name}</span>
                <div
                  className='flex-grow h-6 bg-amber-500/10 border-x-2 border-amber-500 transition-all group-hover:bg-amber-500/30'
                  style={{ width: s.value }}
                />
                <span className='w-20 text-right font-mono text-sm text-zinc-500'>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`p-12 lg:p-16 border flex flex-col ${
            isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'
          } ${tokens.radius}`}
        >
          <div className='flex flex-col items-center justify-center mb-12'>
            <div className='w-24 h-24 bg-zinc-50 dark:bg-black/40 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-zinc-200/50 dark:border-white/5'>
              <Monitor className='text-amber-500' size={48} />
            </div>
            <h4 className='font-serif text-4xl dark:text-white text-center italic'>Fluid Points</h4>
          </div>
          <div className='w-full space-y-6'>
            {breakpoints.map((b) => (
              <div
                key={b.t}
                className='flex items-center justify-between p-5 bg-zinc-50 dark:bg-black/20 rounded-2xl border border-zinc-100 dark:border-white/5 transition-all hover:scale-[1.02] group'
              >
                <div className='flex items-center gap-4'>
                  <span className='text-sm font-black uppercase text-amber-500 group-hover:scale-110 transition-transform'>{b.t}</span>
                  <span className='text-xs text-zinc-400 uppercase tracking-widest'>{b.c}</span>
                </div>
                <span className='font-mono text-sm dark:text-slate-400'>{b.w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
