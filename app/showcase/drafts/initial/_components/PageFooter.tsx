'use client';

interface PageFooterProps {
  isDarkMode: boolean;
}

export function PageFooter({ isDarkMode }: PageFooterProps) {
  return (
    <footer
      className={`mt-20 flex flex-col items-start justify-between gap-12 border-t py-20 md:flex-row ${
        isDarkMode ? 'border-[#232D3D]' : 'border-zinc-200'
      }`}
    >
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <div className='h-6 w-1.5 rotate-12 rounded-full bg-[#8AC926]' />
          <span className='font-serif text-lg tracking-tighter uppercase dark:text-white'>MiaSys Studio</span>
        </div>
        <p className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-500'>
          Designed by Camila Studio â€¢ Build v1.5.0
        </p>
      </div>
      <div className='flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500'>
        <button className='transition-colors hover:text-rose-500'>Documentation</button>
        <div className='h-1 w-1 rounded-full bg-zinc-300' />
        <button className='transition-colors hover:text-rose-500'>Github Set</button>
        <div className='h-1 w-1 rounded-full bg-zinc-300' />
        <button className='transition-colors hover:text-rose-500'>Figma Spec</button>
      </div>
    </footer>
  );
}
