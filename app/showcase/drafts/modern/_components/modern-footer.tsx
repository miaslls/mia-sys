import { Shapes } from 'lucide-react';

interface ModernFooterProps {
  isDarkMode: boolean;
}

export function ModernFooter({ isDarkMode }: ModernFooterProps) {
  return (
    <footer
      className={`mt-60 py-32 border-t flex flex-col md:flex-row justify-between items-start gap-20 ${
        isDarkMode ? 'border-[#232D3D]' : 'border-zinc-200'
      }`}
    >
      <div className='space-y-8'>
        <div className='flex items-center gap-4'>
          <div className='w-14 h-14 bg-[#8AC926] rounded-3xl rotate-12 flex items-center justify-center text-white shadow-xl'>
            <Shapes size={32} />
          </div>
          <span className='font-serif text-5xl tracking-tighter uppercase dark:text-white'>MiaSys</span>
        </div>
        <p className='text-sm font-black text-slate-500 uppercase tracking-[0.4em] ml-1'>Botanical Engineering â€¢ v1.5.2</p>
        <div className='flex gap-6'>
          <div className='w-10 h-10 rounded-2xl bg-amber-500 shadow-lg shadow-amber-500/20' />
          <div className='w-10 h-10 rounded-2xl bg-rose-500 shadow-lg shadow-rose-500/20' />
          <div className='w-10 h-10 rounded-2xl bg-lime-500 shadow-lg shadow-lime-500/20' />
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-24'>
        <div className='space-y-8'>
          <p className='text-xs font-black uppercase tracking-[0.2em] text-zinc-400'>Environment</p>
          <div className='space-y-4'>
            <a href='#' className='block text-base font-bold hover:text-rose-500 transition-colors'>Lab Discovery</a>
            <a href='#' className='block text-base font-bold hover:text-rose-500 transition-colors'>Pattern Flow</a>
          </div>
        </div>
        <div className='space-y-8'>
          <p className='text-xs font-black uppercase tracking-[0.2em] text-zinc-400'>Technical</p>
          <div className='space-y-4'>
            <a href='#' className='block text-base font-bold hover:text-rose-500 transition-colors'>Github Set</a>
            <a href='#' className='block text-base font-bold hover:text-rose-500 transition-colors'>Figma Spec</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
