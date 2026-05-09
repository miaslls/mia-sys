'use client';

import { useState } from 'react';
import {
  Leaf,
  Sprout,
  BarChart3,
  Settings,
  ArrowUpRight,
  Search,
  Bell,
  Check,
  Sun,
  Moon,
  LayoutGrid,
  Smartphone,
  Database,
  FileText,
} from 'lucide-react';

/**
 * MiaSys Layout & Patterns v0.1.0
 * Documentation for:
 * 07. Spacing & Layout
 * 08. Cards & Lists
 * 09. Navigation / Tabs
 */

export default function LayoutPatternsPageContent() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('Studio');
  const [activeSegment, setActiveSegment] = useState('Week');

  const isDark = theme === 'dark';
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const colors = {
    lime: '#A6E22E',
    midnight: '#0D0F13',
    paper: '#F7F6F2',
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 p-6 md:p-16 ${isDark ? `bg-[${colors.midnight}] text-white` : `bg-[${colors.paper}] text-slate-900`}`}
    >
      <style>
        {`
          .glass-card { backdrop-filter: blur(12px); transition: all 0.4s ease; }
          .glass-card-dark { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); }
          .glass-card-light { background: rgba(0, 0, 0, 0.02); border: 1px solid rgba(0, 0, 0, 0.06); }
          .grid-line { background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px; }
        `}
      </style>

      <div className='max-w-6xl mx-auto space-y-24 relative'>
        {/* Header */}
        <header
          className={`flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-12 transition-colors ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
        >
          <div className='space-y-6'>
            <div className='flex items-center gap-6'>
              <div
                className={`p-4 rounded-2xl border transition-all ${isDark ? 'border-lime-500/30 text-lime-400 bg-lime-500/5' : 'border-lime-600/20 text-lime-600 bg-lime-500/10'}`}
              >
                <Leaf size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className='text-5xl font-display tracking-tight'>MiaSys</h1>
                <p
                  className={`text-xs tracking-[0.4em] font-bold uppercase mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                >
                  Layout & Patterns{' '}
                  <span className='text-lime-500 ml-2'>v 0.1.0</span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`mt-8 md:mt-0 p-3 rounded-2xl border transition-all flex items-center gap-3 ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className='text-[10px] font-black uppercase tracking-widest'>
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>
        </header>

        {/* 07. SPACING & LAYOUT */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>07</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Spacing & Layout
            </h2>
          </div>

          <div
            className={`glass-card rounded-[32px] p-10 space-y-12 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              {/* 8pt Scale */}
              <div className='space-y-6'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                  8pt Spacing Scale
                </p>
                <div className='flex items-end gap-1.5 h-20'>
                  {[4, 16, 24, 32, 40, 56, 64, 72, 80, 96].map((s) => (
                    <div
                      key={s}
                      className='group relative flex flex-col items-center flex-1'
                    >
                      <div
                        className='w-full bg-lime-500/20 rounded-sm'
                        style={{ height: `${s / 1.5}px` }}
                      />
                      <span className='text-[8px] text-zinc-500 mt-2'>{s}</span>
                    </div>
                  ))}
                </div>
                <p className='text-[9px] text-zinc-600'>Base unit: 8px</p>
              </div>

              {/* Margins */}
              <div className='space-y-6'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                  Container Margins (Desktop)
                </p>
                <div
                  className={`h-24 w-full border border-dashed rounded-lg flex items-center justify-center relative ${isDark ? 'border-zinc-800 bg-zinc-900/20' : 'border-slate-300 bg-slate-50'}`}
                >
                  <div className='absolute left-0 w-8 h-full bg-lime-500/10 flex items-center justify-center text-[8px] text-lime-500 font-bold border-r border-lime-500/20'>
                    64px
                  </div>
                  <div className='w-1/2 h-8 border border-zinc-700/50 rounded flex items-center justify-center text-[9px] text-zinc-500'>
                    Max 1280px
                  </div>
                  <div className='absolute right-0 w-8 h-full bg-lime-500/10 flex items-center justify-center text-[8px] text-lime-500 font-bold border-l border-lime-500/20'>
                    64px
                  </div>
                </div>
              </div>

              {/* Padding Examples */}
              <div className='space-y-6'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                  Padding Examples (Inside Cards)
                </p>
                <div className='flex justify-between items-end gap-4'>
                  {[16, 24, 32].map((p) => (
                    <div key={p} className='flex-1 space-y-2 text-center'>
                      <div
                        className={`h-16 w-full border border-zinc-700/30 rounded flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-white shadow-sm'}`}
                      >
                        <div
                          className='absolute inset-0 border-[8px] border-lime-500/5 opacity-50'
                          style={{ borderWidth: `${p / 4}px` }}
                        />
                        <span className='text-[10px] font-bold'>{p}px</span>
                      </div>
                      <p className='text-[9px] text-zinc-500 capitalize'>
                        {p === 16
                          ? 'Compact'
                          : p === 24
                            ? 'Comfortable'
                            : 'Spacious'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid & Rules */}
            <div className='pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div className='col-span-1 space-y-4'>
                <div className='flex items-center gap-3'>
                  <LayoutGrid size={16} className='text-lime-500' />
                  <span className='text-[10px] font-bold uppercase'>
                    Grid Structure
                  </span>
                </div>
                <p className='text-[11px] text-zinc-500 leading-relaxed'>
                  Maintain consistent column alignment across breakpoints.
                </p>
              </div>
              <div className='col-span-1 space-y-4'>
                <div className='flex items-center gap-3'>
                  <Smartphone size={16} className='text-lime-500' />
                  <span className='text-[10px] font-bold uppercase'>
                    Mobile Optimized
                  </span>
                </div>
                <p className='text-[11px] text-zinc-500 leading-relaxed'>
                  4-column grid for mobile viewports (360px+).
                </p>
              </div>
              <div className='col-span-2 flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/20 border border-white/5'>
                <div className='flex-1 text-center border-r border-white/5'>
                  <p className='text-[10px] font-bold text-lime-500'>Column</p>
                  <p className='text-xs'>72px</p>
                </div>
                <div className='flex-1 text-center border-r border-white/5'>
                  <p className='text-[10px] font-bold text-lime-500'>Gutter</p>
                  <p className='text-xs'>24px</p>
                </div>
                <div className='flex-1 text-center'>
                  <p className='text-[10px] font-bold text-lime-500'>Margin</p>
                  <p className='text-xs'>64px</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. CARDS & LISTS */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>08</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Cards & Lists
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Card Anatomy */}
            <div
              className={`lg:col-span-2 glass-card rounded-[32px] p-10 space-y-10 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                Card Anatomy
              </p>
              <div className='relative p-12 flex justify-center'>
                <div
                  className={`w-[340px] rounded-2xl p-6 space-y-4 border relative ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-xl'}`}
                >
                  <div className='flex justify-between items-start'>
                    <div className='space-y-0.5'>
                      <h4 className='text-sm font-bold'>Card Title</h4>
                      <p className='text-[10px] text-zinc-500'>
                        Primary description goes here.
                      </p>
                    </div>
                    <Leaf size={16} className='text-lime-500' />
                  </div>
                  <div className='h-20 w-full bg-lime-500/5 rounded-lg flex items-end p-2 gap-1'>
                    {[40, 60, 35, 75, 50, 90, 65].map((h, i) => (
                      <div
                        key={i}
                        className='flex-1 bg-lime-500/20 rounded-t-sm'
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className='flex justify-between items-center pt-4 border-t border-white/5'>
                    <div className='flex items-center gap-1.5'>
                      <div className='w-2 h-2 rounded-full bg-lime-500' />
                      <span className='text-[10px] text-zinc-500'>Status</span>
                    </div>
                    <ArrowUpRight size={14} className='text-zinc-500' />
                  </div>

                  {/* Annotations */}
                  <div className='absolute -left-32 top-0 text-right space-y-4'>
                    <div className='text-[9px] text-zinc-500'>
                      <span className='font-bold text-lime-500'>Header</span>
                      <br />
                      Title, icon, actions
                    </div>
                    <div className='text-[9px] text-zinc-500 pt-8'>
                      <span className='font-bold text-lime-500'>Body</span>
                      <br />
                      Primary content
                    </div>
                    <div className='text-[9px] text-zinc-500 pt-8'>
                      <span className='font-bold text-lime-500'>Footer</span>
                      <br />
                      Metadata, actions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Examples */}
            <div
              className={`glass-card rounded-[32px] p-10 space-y-8 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                List Item Examples
              </p>
              <div className='space-y-3'>
                {[
                  {
                    title: 'Lumière Protocol',
                    meta: 'Growth • 12 steps',
                    status: 'Active',
                    color: 'bg-lime-500',
                  },
                  {
                    title: 'Soil Balance',
                    meta: 'Nutrition • 8 steps',
                    status: 'Draft',
                    color: 'bg-zinc-500',
                  },
                  {
                    title: 'Bloom Phase',
                    meta: 'Flowering • 10 steps',
                    status: 'Completed',
                    color: 'bg-lime-600',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`p-4 rounded-xl border flex items-center justify-between group cursor-pointer transition-all ${isDark ? 'bg-zinc-900/50 border-zinc-800 hover:border-lime-500/30' : 'bg-white border-slate-100 hover:border-slate-300'}`}
                  >
                    <div className='flex items-center gap-3'>
                      <div
                        className={`w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-lime-500`}
                      >
                        <Sprout size={14} />
                      </div>
                      <div>
                        <h5 className='text-[11px] font-bold'>{item.title}</h5>
                        <p className='text-[9px] text-zinc-500'>{item.meta}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-1.5'>
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                        />
                        <span className='text-[9px] text-zinc-500'>
                          {item.status}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={12}
                        className='opacity-0 group-hover:opacity-100 transition-opacity'
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-4'>
                Compact List Item
              </p>
              <div
                className={`rounded-xl border divide-y transition-colors ${isDark ? 'bg-zinc-950 border-zinc-800 divide-zinc-800' : 'bg-white border-slate-200 divide-slate-100'}`}
              >
                {['Environment', 'Irrigation', 'Lighting'].map((label) => (
                  <div
                    key={label}
                    className='p-3 flex items-center justify-between px-4 group cursor-pointer hover:bg-lime-500/5'
                  >
                    <span className='text-[10px] font-bold text-zinc-500 group-hover:text-lime-500 transition-colors'>
                      {label}
                    </span>
                    <ArrowUpRight size={12} className='text-zinc-700' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 09. NAVIGATION / TABS */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>09</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Navigation / Tabs
            </h2>
          </div>

          <div
            className={`glass-card rounded-[48px] p-12 space-y-16 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
          >
            {/* Top Navigation Bar Component */}
            <div className='space-y-4'>
              <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                Top Navigation Bar
              </p>
              <nav
                className={`h-16 rounded-2xl border flex items-center justify-between px-6 transition-all ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                <div className='flex items-center gap-8'>
                  <div className='flex items-center gap-2'>
                    <Leaf size={18} className='text-lime-500' />
                    <span className='text-sm font-display'>MiaSys</span>
                  </div>
                  <div className='hidden md:flex items-center gap-6'>
                    {['Studio', 'Protocols', 'Library', 'Insights'].map(
                      (item) => (
                        <a
                          key={item}
                          href='#'
                          className={`text-[11px] font-bold transition-colors ${activeTab === item ? 'text-lime-500' : 'text-zinc-500 hover:text-zinc-300'}`}
                          onClick={() => setActiveTab(item)}
                        >
                          {item}
                        </a>
                      ),
                    )}
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <Search size={16} className='text-zinc-500' />
                  <Bell size={16} className='text-zinc-500' />
                  <div className='w-8 h-8 rounded-full bg-zinc-800 border border-white/10' />
                </div>
              </nav>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
              {/* Horizontal & Vertical Tabs */}
              <div className='space-y-12'>
                <div className='space-y-4'>
                  <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                    Horizontal Tabs
                  </p>
                  <div className='flex gap-8 border-b border-white/5'>
                    {['Studio', 'Protocols', 'Library'].map((tab) => (
                      <button
                        key={tab}
                        className={`pb-3 text-[11px] font-bold transition-all relative ${activeTab === tab ? 'text-lime-500' : 'text-zinc-500 hover:text-zinc-300'}`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <div className='absolute bottom-0 left-0 w-full h-[2px] bg-lime-500' />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='space-y-4'>
                  <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                    Segmented Tabs
                  </p>
                  <div
                    className={`p-1 rounded-xl flex max-w-xs border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}
                  >
                    {['Day', 'Week', 'Month', 'Year'].map((seg) => (
                      <button
                        key={seg}
                        onClick={() => setActiveSegment(seg)}
                        className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${activeSegment === seg ? 'bg-lime-500 text-black shadow-lg' : 'text-zinc-500'}`}
                      >
                        {seg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Nav Rail */}
              <div className='space-y-4'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>
                  Side Navigation Rail
                </p>
                <div className='flex gap-8'>
                  <aside
                    className={`w-16 rounded-2xl flex flex-col items-center py-6 gap-6 border ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'}`}
                  >
                    <div className='p-2 rounded-lg bg-lime-500/10 text-lime-500'>
                      <Leaf size={18} />
                    </div>
                    <div className='text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer'>
                      <BarChart3 size={18} />
                    </div>
                    <div className='text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer'>
                      <Database size={18} />
                    </div>
                    <div className='text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer'>
                      <FileText size={18} />
                    </div>
                    <div className='mt-auto text-zinc-600'>
                      <Settings size={18} />
                    </div>
                  </aside>
                  <div className='flex-1 space-y-4'>
                    {[
                      {
                        icon: Leaf,
                        label: 'Studio',
                        desc: 'Overview & control',
                      },
                      {
                        icon: BarChart3,
                        label: 'Analytics',
                        desc: 'Trends & metrics',
                      },
                      {
                        icon: Database,
                        label: 'Library',
                        desc: 'Resource management',
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className='flex items-center gap-4 group cursor-pointer'
                      >
                        <div
                          className={`p-2 rounded transition-colors ${isDark ? 'bg-zinc-900 text-zinc-500 group-hover:text-lime-500' : 'bg-slate-100 text-slate-500'}`}
                        >
                          <item.icon size={16} />
                        </div>
                        <div>
                          <h6 className='text-[11px] font-bold'>
                            {item.label}
                          </h6>
                          <p className='text-[9px] text-zinc-500'>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Rules */}
            <div
              className={`p-6 rounded-2xl border transition-colors ${isDark ? 'bg-zinc-900/20 border-white/5' : 'bg-slate-50 border-slate-200'}`}
            >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex items-center gap-3'>
                  <Check size={14} className='text-lime-500' />
                  <span className='text-[10px] font-bold uppercase'>
                    Integrates into dashboards
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Check size={14} className='text-lime-500' />
                  <span className='text-[10px] font-bold uppercase'>
                    Works in forms and flows
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Check size={14} className='text-lime-500' />
                  <span className='text-[10px] font-bold uppercase'>
                    Adapts across breakpoints
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`pt-12 pb-20 border-t flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors ${isDark ? 'border-zinc-800 opacity-50' : 'border-slate-200'}`}
        >
          <div
            className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
          >
            <Leaf size={14} className='text-lime-500' />
            Organic by logic.{' '}
            <span className='text-lime-500'>Engineered for life.</span>
          </div>
          <p
            className={`text-[9px] uppercase tracking-widest ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}
          >
            © 2026 MIASYS LAYOUT SYSTEMS
          </p>
        </footer>
      </div>
    </div>
  );
}
