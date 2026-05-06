'use client';

import { tokens } from './constants';
import type { ColorCardProps } from './types';

export function ColorCard({ name, hex, isDarkMode, desc }: ColorCardProps) {
  return (
    <div
      className={`group border p-4 shadow-sm ${isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white'} ${tokens.radius}`}
    >
      <div
        className={`mb-4 h-32 w-full border border-black/5 shadow-inner ${tokens.radius}`}
        style={{ backgroundColor: hex }}
      />
      <div className='mb-1 flex items-center justify-between'>
        <h4 className='text-sm font-bold uppercase dark:text-white'>{name}</h4>
        <code className='font-mono text-[10px] font-black text-rose-500'>{hex}</code>
      </div>
      <p className='text-[11px] leading-tight text-zinc-400'>{desc}</p>
    </div>
  );
}
