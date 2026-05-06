'use client';

import { Leaf } from 'lucide-react';
import { navTabs } from './constants';
import type { TabId } from './types';

interface SidebarNavProps {
  activeTab: TabId;
  isDarkMode: boolean;
  onTabChange: (tab: TabId) => void;
  onThemeToggle: () => void;
}

export function SidebarNav({
  activeTab,
  isDarkMode,
  onTabChange,
  onThemeToggle,
}: SidebarNavProps) {
  return (
    <nav
      className={`fixed top-0 left-0 z-50 hidden h-full w-72 flex-col border-r p-10 transition-all duration-500 lg:flex ${
        isDarkMode
          ? 'border-[#232D3D] bg-[#0B0E14]'
          : 'border-zinc-200 bg-[#EDEBE3] shadow-xl'
      }`}
    >
      <div className='mb-12'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 rotate-3 items-center justify-center rounded-2xl bg-[#FFCA3A] shadow-lg'>
            <Leaf size={22} strokeWidth={2.5} className='text-[#0B0E14]' />
          </div>
          <h1 className='font-serif text-3xl tracking-tighter text-[#0B0E14] dark:text-white'>MiaSys.</h1>
        </div>
        <p className='mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 italic'>
          Design Manifesto
        </p>
      </div>

      <div className='custom-scrollbar flex-grow space-y-1.5 overflow-y-auto pr-2'>
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-bold transition-all ${
              activeTab === tab.id
                ? isDarkMode
                  ? 'bg-[#141A24]'
                  : 'border border-zinc-100 bg-[#F7F3F3] shadow-sm'
                : isDarkMode
                  ? 'text-slate-500 hover:text-slate-100'
                  : 'text-zinc-500 hover:text-zinc-900'
            }`}
            style={{ color: activeTab === tab.id ? tab.color : 'inherit' }}
          >
            <tab.icon size={18} className={activeTab === tab.id ? 'rotate-12' : ''} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className='mt-auto border-t border-zinc-200/50 pt-6 dark:border-zinc-800'>
        <button
          onClick={onThemeToggle}
          className={`flex w-full items-center justify-between rounded-2xl border p-4 ${
            isDarkMode ? 'border-[#232D3D] bg-[#141A24]' : 'border-zinc-100 bg-white shadow-sm'
          }`}
        >
          <span className='text-[10px] font-black uppercase tracking-widest text-slate-500'>
            {isDarkMode ? 'Midnight' : 'Paper'}
          </span>
          <div
            className={`relative h-6 w-10 rounded-full transition-colors ${
              isDarkMode ? 'bg-slate-700' : 'bg-zinc-200'
            }`}
          >
            <div
              className={`absolute top-1 h-4 w-4 rounded-full transition-all ${
                isDarkMode ? 'left-5 bg-[#FFCA3A]' : 'left-1 bg-white shadow-sm'
              }`}
            />
          </div>
        </button>
      </div>
    </nav>
  );
}
