import { RotateCcw, tokens } from '../../_lib/constants';
import { SectionHeader } from '../section-header';
import { Squiggle } from '../primitives';

interface SignatureTabProps {
  isDarkMode: boolean;
}

export function SignatureTab({ isDarkMode }: SignatureTabProps) {
  return (
    <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Signature.'
        sub='The non-functional soul of the system. Flourishes that ground the digital garden.'
        hexColor={tokens.colors.brand.rose}
        blobVariant='C'
        isDarkMode={isDarkMode}
      />
      <div className='grid md:grid-cols-2 gap-12'>
        <div
          className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius} overflow-hidden relative group`}
        >
          <div
            className='absolute inset-0 opacity-[0.05] pointer-events-none transition-all group-hover:opacity-[0.08]'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? 'white' : 'black'} 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
          <h4 className='text-[10px] font-black uppercase text-rose-500 mb-12 tracking-[0.3em] relative z-10'>Studio Texture</h4>
          <div className='flex flex-col items-center gap-12 relative z-10'>
            <div className='w-32 h-32 rounded-[2.5rem] bg-zinc-50 dark:bg-black/40 flex items-center justify-center shadow-inner group-hover:rotate-45 transition-transform duration-1000'>
              <RotateCcw className='text-zinc-300' size={64} />
            </div>
            <p className='text-lg text-zinc-500 font-medium italic text-center max-w-[280px]'>Subtle Dot Grids provide architectural precision.</p>
          </div>
        </div>
        <div
          className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius}`}
        >
          <h4 className='text-[10px] font-black uppercase text-amber-500 mb-16 tracking-[0.3em]'>The Squiggle</h4>
          <div className='space-y-24 py-4 flex flex-col items-center'>
            <Squiggle className='w-full text-amber-500 h-10 hover:scale-x-110 transition-transform' />
            <div className='relative w-full h-20 flex items-center justify-center'>
              <Squiggle className='absolute inset-0 w-full text-rose-500/20 h-full rotate-2' />
              <h4 className='font-serif text-4xl dark:text-white relative z-10 italic'>Botanical Cut.</h4>
            </div>
            <p className='text-xs text-zinc-400 text-center uppercase font-black tracking-widest mt-12'>Universal Branding Accents</p>
          </div>
        </div>
      </div>
    </div>
  );
}
