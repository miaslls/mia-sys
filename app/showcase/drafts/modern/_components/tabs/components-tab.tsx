import { AlertCircle, CheckCircle2, Plus, Share, Sparkles } from 'lucide-react';
import { RotateCcw, Type, tokens } from '../../_lib/constants';
import { SectionHeader } from '../section-header';

interface ComponentsTabProps {
  isDarkMode: boolean;
}

const feedbackAlerts = [
  { title: 'New Growth', sub: 'System updated successfully.', color: 'bg-lime-500', icon: Sparkles },
  { title: 'Critical Halt', sub: 'Action required immediately.', color: 'bg-rose-500', icon: AlertCircle },
  { title: 'Pending Sync', sub: 'Connecting to Mia Discovery.', color: 'bg-amber-500', icon: RotateCcw },
];

export function ComponentsTab({ isDarkMode }: ComponentsTabProps) {
  return (
    <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
      <SectionHeader
        title='Components.'
        sub='Standardized modules built for high-velocity user interfaces and technical precision.'
        hexColor={tokens.colors.brand.azure}
        blobVariant='A'
        isDarkMode={isDarkMode}
      />
      <div className='grid lg:grid-cols-2 gap-20'>
        <section className='space-y-10'>
          <div className='flex items-center gap-4'>
            <div className='w-1.5 h-6 bg-amber-500 rounded-full' />
            <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>Action Drivers</h4>
          </div>
          <div
            className={`p-16 border ${
              isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'
            } ${tokens.radius} flex flex-col gap-12`}
          >
            <div className='space-y-6'>
              <p className='text-[10px] font-bold text-zinc-400 uppercase tracking-widest'>Button Variants</p>
              <div className='flex flex-wrap gap-4'>
                <button className={`px-8 py-4 bg-[#FFCA3A] text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-500/10 ${tokens.radius}`}>Primary</button>
                <button className={`px-8 py-4 border-2 border-zinc-200 dark:border-zinc-700 font-black text-xs uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all dark:text-white ${tokens.radius}`}>Ghost</button>
                <button className={`px-8 py-4 bg-[#FF595E] text-white font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-rose-500/10 ${tokens.radius}`}>Danger</button>
              </div>
            </div>
            <div className='space-y-6'>
              <p className='text-[10px] font-bold text-zinc-400 uppercase tracking-widest'>Iconic Buttons</p>
              <div className='flex gap-4'>
                <button className={`w-14 h-14 bg-[#1982C4] text-white flex items-center justify-center hover:rotate-12 transition-all shadow-xl shadow-blue-500/20 ${tokens.radius}`}>
                  <Plus size={24} strokeWidth={2.5} />
                </button>
                <button className={`w-14 h-14 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all dark:text-white ${tokens.radius}`}>
                  <Share size={24} strokeWidth={2} />
                </button>
                <button className={`w-14 h-14 bg-[#8AC926] text-white flex items-center justify-center hover:rotate-[-12deg] transition-all shadow-xl shadow-lime-500/20 ${tokens.radius}`}>
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-10'>
          <div className='flex items-center gap-4'>
            <div className='w-1.5 h-6 bg-rose-500 rounded-full' />
            <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>Entry Fields</h4>
          </div>
          <div
            className={`p-16 border ${
              isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'
            } ${tokens.radius} space-y-10`}
          >
            <div className='space-y-3'>
              <label className='text-[10px] font-black uppercase text-amber-500 tracking-widest ml-1'>Active Interaction</label>
              <div className='w-full border-2 border-amber-500 p-4 rounded-2xl bg-white dark:bg-[#0B0E14] flex items-center gap-4 shadow-2xl shadow-amber-500/10'>
                <Type size={20} className='text-amber-500' />
                <input className='bg-transparent border-none outline-none w-full text-base font-medium dark:text-white' defaultValue='MiaSys Input Session' />
              </div>
              <p className='text-[10px] text-zinc-400 italic px-1'>Micro-copy: System utilizes high-contrast focus rings.</p>
            </div>
            <div className='space-y-3'>
              <div className='w-full border-2 border-[#FF595E]/50 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-900/10 flex items-center gap-4'>
                <AlertCircle size={20} className='text-rose-500' />
                <input className='bg-transparent border-none outline-none w-full text-base font-medium text-rose-500' defaultValue='Invalid Signature' />
              </div>
              <p className='text-[10px] text-rose-500 font-bold px-1 uppercase tracking-tighter'>Identity validation failed.</p>
            </div>
          </div>
        </section>

        <section className='space-y-10 lg:col-span-2'>
          <div className='flex items-center gap-4'>
            <div className='w-1.5 h-6 bg-lime-500 rounded-full' />
            <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>Feedback Systems</h4>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {feedbackAlerts.map((alert) => (
              <div
                key={alert.title}
                className={`p-8 ${isDarkMode ? 'bg-[#141A24]' : 'bg-white shadow-xl'} border border-zinc-100 dark:border-[#232D3D] ${tokens.radius} flex items-center gap-6 group`}
              >
                <div className={`w-14 h-14 ${alert.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12`}>
                  <alert.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h5 className='font-black text-sm dark:text-white uppercase tracking-tighter'>{alert.title}</h5>
                  <p className='text-xs text-zinc-400'>{alert.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
