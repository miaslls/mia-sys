import type { ModernTabId, NavItem } from '../_lib/types';
import { Leaf, Menu, Moon, Sun } from '../_lib/constants';

interface ModernTopNavProps {
  isDarkMode: boolean;
  activeTab: ModernTabId;
  navItems: NavItem[];
  onTabChange: (tab: ModernTabId) => void;
  onToggleDarkMode: () => void;
}

export function ModernTopNav({
  isDarkMode,
  activeTab,
  navItems,
  onTabChange,
  onToggleDarkMode,
}: ModernTopNavProps) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-2xl ${
        isDarkMode ? 'bg-[#0B0E14]/80 border-[#232D3D]' : 'bg-white/80 border-zinc-200 shadow-sm'
      }`}
    >
      <div className='max-w-[1400px] mx-auto px-10 h-24 flex items-center justify-between'>
        <div className='flex items-center gap-3 group cursor-pointer' onClick={() => onTabChange('manifesto')}>
          <div className='w-12 h-12 bg-[#FFCA3A] rounded-2xl rotate-3 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110'>
            <Leaf size={24} strokeWidth={2.5} className='text-[#0B0E14]' />
          </div>
          <h1 className='font-serif text-4xl tracking-tighter text-[#0B0E14] dark:text-white'>MiaSys.</h1>
        </div>

        <div className='hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#141A24] border border-zinc-200/50 dark:border-[#232D3D]'>
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                activeTab === tab.id
                  ? isDarkMode
                    ? 'bg-[#0B0E14] text-[#FFCA3A] shadow-lg'
                    : 'bg-white text-rose-500 shadow-md'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-slate-200'
              }`}
            >
              <tab.icon size={14} className={activeTab === tab.id ? 'rotate-12' : ''} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <button
            onClick={onToggleDarkMode}
            className={`p-4 rounded-2xl border transition-all ${
              isDarkMode
                ? 'bg-[#141A24] border-[#232D3D] text-[#FFCA3A]'
                : 'bg-white border-zinc-100 text-zinc-500 hover:shadow-lg'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className='lg:hidden p-4 rounded-2xl border border-zinc-200 dark:border-[#232D3D]'>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
