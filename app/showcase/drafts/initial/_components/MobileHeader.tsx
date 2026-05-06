'use client';

import { Leaf, Moon, Sun } from 'lucide-react';

interface MobileHeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function MobileHeader({ isDarkMode, onThemeToggle }: MobileHeaderProps) {
  return (
    <header
      className={`fixed top-0 z-40 flex w-full items-center justify-between border-b px-8 py-5 backdrop-blur-md lg:hidden ${
        isDarkMode
          ? 'border-[#232D3D] bg-[#0B0E14]/80'
          : 'border-zinc-200 bg-[#EDEBE3]/80 shadow-sm'
      }`}
    >
      <div className='flex items-center gap-2'>
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFCA3A]'>
          <Leaf size={18} strokeWidth={2.5} className='text-[#0B0E14]' />
        </div>
        <span className='font-serif text-xl tracking-tighter dark:text-white'>MiaSys</span>
      </div>
      <button className='text-zinc-500' onClick={onThemeToggle}>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
}
