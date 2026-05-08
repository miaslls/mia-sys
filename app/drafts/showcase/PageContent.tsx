'use client';

import { useState } from 'react';
import Image from 'next/image';
import WednesdayImage from '../../../assets/img/wednesday.jpg';
import {
  Leaf,
  Sprout,
  BarChart3,
  Settings,
  ArrowUpRight,
  ChevronDown,
  Sun,
  Moon,
} from 'lucide-react';

/**
 * MiaSys SPA - Botanical Engineering Interface
 * Features:
 * - Theme switching (Midnight / Paper)
 * - Glassmorphism effects
 * - Custom SVG assets for botanical feel
 * - Style Guide section based on the design spec
 */
export default function ShowcasePageContent() {
  const [theme, setTheme] = useState('dark'); // 'dark' (Midnight) or 'light' (Paper)

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Design Tokens based on the provided images
  const colors = {
    amber: '#FFC857',
    rose: '#FF6B7A',
    lime: '#A6E22E',
    azure: '#4DA3FF',
    midnight: '#0D0F13',
    paper: '#F7F6F2',
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ease-in-out p-6 md:p-12 overflow-x-hidden`}
      style={{ backgroundColor: isDark ? colors.midnight : '#e5e5e0' }}
    >
      <style>
        {`
          .glass-dark { 
            background: rgba(255, 255, 255, 0.03); 
            backdrop-filter: blur(12px); 
            border: 1px solid rgba(255, 255, 255, 0.08); 
          }
          .glass-light { 
            background: rgba(0, 0, 0, 0.02); 
            backdrop-filter: blur(12px); 
            border: 1px solid rgba(0, 0, 0, 0.05); 
          }
          .glow-lime { box-shadow: 0 0 20px rgba(166, 226, 46, 0.2); }
        `}
      </style>

      {/* Main Container */}
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* Top Header Section */}
        <header className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
          <div className='flex items-center gap-6'>
            <div
              className={`p-3 rounded-xl border transition-all ${isDark ? 'border-lime-500/30 text-lime-400' : 'border-lime-600/20 text-lime-700'}`}
            >
              <Leaf size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h1
                className={`text-4xl font-display tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                MiaSys
              </h1>
              <p
                className={`text-[10px] tracking-[0.2em] font-semibold uppercase mt-1 transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
              >
                Botanical Engineering{' '}
                <span className='text-lime-500 ml-2'>v 1.5.2</span>
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4 pl-4 border-l border-zinc-800'>
            <div
              className={`p-2 rounded-full cursor-pointer hover:bg-zinc-800 transition-all ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </div>
            <div className='hidden md:block'>
              <p className='text-lime-500 text-sm font-medium'>
                Organic Logic Interface
              </p>
              <p
                className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
              >
                Software that helps growth. Engineered to evolve.
              </p>
            </div>
          </div>
        </header>

        {/* Main Interface Card (The Hero Component) */}
        <div
          className={`relative w-full rounded-[48px] overflow-hidden min-h-[600px] shadow-2xl transition-all duration-700 ${isDark ? 'bg-black border-zinc-800' : 'bg-[#F7F6F2] border-white/50'} border-4`}
        >
          {/* Subtle Background Elements */}
          <div
            className={`absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 ${isDark ? 'bg-lime-900' : 'bg-lime-200'}`}
          />

          {/* Organic Plant Graphic Placeholder */}
          <div className='absolute right-0 bottom-0 w-1/2 h-full pointer-events-none flex items-end justify-end p-0 opacity-80 overflow-hidden'>
            <div className='relative w-full h-full'>
              {/* SVG Botanical Graphic */}
              <svg
                viewBox='0 0 400 600'
                className='absolute bottom-0 right-0 h-[110%] w-auto'
              >
                <path
                  d='M350,600 C320,500 340,300 350,150'
                  stroke={isDark ? '#2d3a1a' : '#cbd5c0'}
                  strokeWidth='2'
                  fill='none'
                />
                <g
                  className={`${isDark ? 'fill-lime-500/20' : 'fill-lime-600/10'}`}
                >
                  <ellipse
                    cx='340'
                    cy='450'
                    rx='15'
                    ry='30'
                    transform='rotate(-30 340 450)'
                  />
                  <ellipse
                    cx='360'
                    cy='380'
                    rx='12'
                    ry='25'
                    transform='rotate(20 360 380)'
                  />
                  <ellipse
                    cx='345'
                    cy='280'
                    rx='18'
                    ry='35'
                    transform='rotate(-40 345 280)'
                  />
                  <ellipse
                    cx='355'
                    cy='180'
                    rx='10'
                    ry='20'
                    transform='rotate(10 355 180)'
                  />
                </g>
                {/* Glowing spots */}
                <circle
                  cx='350'
                  cy='150'
                  r='4'
                  className={isDark ? 'fill-lime-400' : 'fill-lime-600'}
                />
              </svg>
              {/* Ground texture */}
              <div
                className={`absolute bottom-0 right-0 w-[400px] h-32 blur-xl translate-y-16 ${isDark ? 'bg-zinc-900' : 'bg-slate-300'}`}
              />
            </div>
          </div>

          <div className='relative z-10 p-10 md:p-16 flex h-full'>
            {/* Sidebar UI Component */}
            <aside
              className={`flex flex-col items-center gap-8 py-8 px-4 rounded-[32px] self-center ${isDark ? 'glass-dark' : 'glass-light'}`}
            >
              <button
                className={`p-4 rounded-2xl transition-all ${isDark ? 'bg-lime-500/10 text-lime-400 ring-1 ring-lime-500/50 glow-lime' : 'bg-white shadow-sm text-lime-700'}`}
              >
                <Leaf size={24} />
              </button>
              <button
                className={`p-4 rounded-2xl transition-all opacity-40 hover:opacity-100 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <BarChart3 size={24} />
              </button>
              <button
                className={`p-4 rounded-2xl transition-all opacity-40 hover:opacity-100 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <Sprout size={24} />
              </button>
              <button
                className={`p-4 rounded-2xl transition-all opacity-40 hover:opacity-100 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <Settings size={24} />
              </button>
            </aside>

            {/* Content Area */}
            <main className='ml-16 flex flex-col justify-center max-w-xl'>
              <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-2'>
                  <h3
                    className={`text-xl font-display ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    MiaSys
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                  >
                    v 1.5.2
                  </span>
                </div>

                {/* Profile Badge */}
                <div
                  className={`flex items-center gap-3 p-1.5 pr-4 rounded-full transition-all border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white shadow-sm border-slate-200'}`}
                >
                  <div className='w-10 h-10 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center'>
                    <Image
                      src={WednesdayImage}
                      alt='Profile'
                      className='w-full h-full object-cover'
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className='text-left'>
                    <p
                      className={`text-[10px] leading-tight font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      Dr. Elara Voss
                    </p>
                    <p
                      className={`text-[9px] leading-tight opacity-50 uppercase tracking-tighter ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
                    >
                      Lead Botanist
                    </p>
                  </div>
                  <ChevronDown
                    size={14}
                    className={isDark ? 'text-zinc-500' : 'text-slate-400'}
                  />
                </div>
              </div>

              <div className='space-y-6'>
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isDark ? 'text-lime-500' : 'text-lime-700'}`}
                >
                  Organic Logic
                </span>
                <h2
                  className={`text-6xl md:text-7xl font-display leading-[1.1] transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  Engineering life.
                  <br />
                  <span className='italic font-normal'>With intention.</span>
                </h2>
                <p
                  className={`text-lg leading-relaxed max-w-sm transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  MiaSys unites botanical intelligence, automation, and
                  ecological insight in a living system that grows with you.
                </p>

                <div className='flex items-center gap-4 pt-8'>
                  <button className='bg-[#A6E22E] hover:bg-[#95cc29] text-black font-semibold px-8 py-4 rounded-full flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-lime-500/20'>
                    Explore the Studio <ArrowUpRight size={20} />
                  </button>
                  <button
                    className={`px-8 py-4 rounded-full font-semibold border transition-all flex items-center gap-4 hover:scale-105 active:scale-95 ${isDark ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    View Protocols <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Style Guide / Footer Component */}
        <section
          className={`p-10 rounded-[40px] border transition-all ${isDark ? 'bg-[#0D0F13] border-zinc-800' : 'bg-white border-slate-200 shadow-xl'}`}
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {/* Color System */}
            <div className='space-y-6'>
              <div className='flex items-center gap-3'>
                <span
                  className={`text-[10px] font-bold py-1 px-2 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-100 text-slate-500'}`}
                >
                  01
                </span>
                <h4
                  className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  Color System
                </h4>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                {[
                  { name: 'Amber', hex: colors.amber },
                  { name: 'Rose', hex: colors.rose },
                  { name: 'Lime', hex: colors.lime },
                  { name: 'Azure', hex: colors.azure },
                  { name: 'Midnight', hex: colors.midnight },
                  { name: 'Paper', hex: colors.paper },
                ].map((c) => (
                  <div key={c.name} className='space-y-2'>
                    <div
                      className='h-14 w-full rounded-xl border border-white/10'
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className='space-y-0.5'>
                      <p
                        className={`text-[10px] font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                      >
                        {c.name}
                      </p>
                      <p className='text-[9px] text-zinc-500 uppercase'>
                        {c.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className='space-y-6 border-l border-zinc-800 pl-8'>
              <div className='flex items-center gap-3'>
                <span
                  className={`text-[10px] font-bold py-1 px-2 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-100 text-slate-500'}`}
                >
                  02
                </span>
                <h4
                  className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  Typography
                </h4>
              </div>
              <div className='space-y-8'>
                <div className='flex items-baseline gap-6'>
                  <span
                    className={`text-5xl font-display ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Aa
                  </span>
                  <div className='space-y-0.5'>
                    <p
                      className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                    >
                      Cormorant Garamond
                    </p>
                    <p className='text-[10px] text-zinc-500'>
                      Display / Headings
                    </p>
                  </div>
                </div>
                <div className='flex items-baseline gap-6'>
                  <span
                    className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Aa
                  </span>
                  <div className='space-y-0.5'>
                    <p
                      className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                    >
                      Manrope
                    </p>
                    <p className='text-[10px] text-zinc-500'>
                      Medium / Semibold / Body / UI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className='space-y-6 border-l border-zinc-800 pl-8'>
              <div className='flex items-center gap-3'>
                <span
                  className={`text-[10px] font-bold py-1 px-2 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-100 text-slate-500'}`}
                >
                  03
                </span>
                <h4
                  className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  Icons & Components
                </h4>
              </div>
              <div className='flex flex-wrap items-center gap-4'>
                <div
                  className={`p-3 rounded-xl ${isDark ? 'bg-zinc-900 border border-zinc-800 text-lime-400' : 'bg-slate-50 border border-slate-100 text-lime-700'}`}
                >
                  <Leaf size={18} />
                </div>
                <div
                  className={`p-3 rounded-xl border ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-100 text-slate-400'}`}
                >
                  <Sprout size={18} />
                </div>
                <div
                  className={`p-3 rounded-xl border ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-100 text-slate-400'}`}
                >
                  <BarChart3 size={18} />
                </div>
                <div
                  className={`p-3 rounded-xl border ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-100 text-slate-400'}`}
                >
                  <Settings size={18} />
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <button className='bg-lime-500 h-12 w-32 rounded-full flex items-center justify-center text-black font-bold text-[10px] uppercase tracking-widest gap-2'>
                  Primary <ArrowUpRight size={14} />
                </button>
                <button
                  className={`h-12 w-12 rounded-full flex items-center justify-center border ${isDark ? 'border-zinc-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center opacity-50'>
            <div className='flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400'>
              <Leaf size={12} className='text-lime-500' />
              Organic by logic.{' '}
              <span className='text-lime-500 font-bold'>
                Engineered for life.
              </span>
            </div>
            <p className='text-[10px] text-zinc-500'>
              © 2026 MIASYS BOTANICAL SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
