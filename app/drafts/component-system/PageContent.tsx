'use client';

import { useState } from 'react';
import {
  Leaf,
  ArrowUpRight,
  Search,
  ChevronDown,
  Activity,
  Check,
  Sun,
  Moon,
} from 'lucide-react';

/**
 * MiaSys Component System Spec v0.1.0
 * Features:
 * - Adaptive Theme Support (Midnight / Paper)
 * - Interactive UI Primitives
 * - Visual Token Scale
 */

export default function ComponentsPageContent() {
  const [theme, setTheme] = useState('dark');
  const [toggle, setToggle] = useState(true);
  const [radio, setRadio] = useState('selected');
  const [checkbox, setCheckbox] = useState(true);
  const [segmented, setSegmented] = useState('Option 1');

  const isDark = theme === 'dark';
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Design Tokens
  const colors = {
    lime: '#A6E22E',
    midnight: '#0D0F13',
    paper: '#F7F6F2',
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 p-8 md:p-16 ${isDark ? `bg-[${colors.midnight}] text-white` : `bg-[${colors.paper}] text-slate-900`}`}
    >
      {/* Global Style Injector */}
      <style>
        {`        
          .glass-card {
            backdrop-filter: blur(12px);
            transition: all 0.5s ease;
          }

          .glass-card-dark {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .glass-card-light {
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 4px 24px rgba(0,0,0,0.02);
          }

          .input-focus:focus {
            outline: none;
            border-color: #A6E22E;
            box-shadow: 0 0 0 1px rgba(166, 226, 46, 0.3);
          }
        `}
      </style>

      <div className='max-w-6xl mx-auto space-y-20 relative'>
        {/* Header Section */}
        <header
          className={`flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-12 transition-colors ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
        >
          <div className='space-y-6'>
            <div className='flex items-center gap-6'>
              <div
                className={`p-4 rounded-2xl border transition-all ${isDark ? 'border-lime-500/30 text-lime-400 bg-lime-500/5 shadow-[0_0_20px_rgba(166,226,46,0.15)]' : 'border-lime-600/20 text-lime-600 bg-lime-500/10'}`}
              >
                <Leaf size={48} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className='text-6xl font-display tracking-tight'>MiaSys</h1>
                <p
                  className={`text-xs tracking-[0.4em] font-bold uppercase mt-1 transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                >
                  Component System{' '}
                  <span className='text-lime-500 ml-2'>v 0.1.0</span>
                </p>
              </div>
            </div>
            <div
              className={`pl-2 border-l-2 transition-colors ${isDark ? 'border-lime-500/50' : 'border-lime-600/50'}`}
            >
              <p
                className={`max-w-xs text-sm leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
              >
                Detailed UI primitives for the{' '}
                <span className='text-lime-500 font-bold'>Organic Logic</span>{' '}
                Interface.
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`mt-8 md:mt-0 p-4 rounded-2xl flex items-center gap-3 border transition-all hover:scale-105 ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className='text-[10px] font-black uppercase tracking-widest'>
              {isDark ? 'Light' : 'Dark'} Mode
            </span>
          </button>

          {/* Subtle Background Plant Graphic */}
          <div className='absolute top-0 right-0 opacity-10 pointer-events-none overflow-hidden h-64 w-64'>
            <svg viewBox='0 0 200 200' className='w-full h-full'>
              <path
                d='M100,200 Q90,100 110,20'
                stroke={isDark ? '#A6E22E' : '#166534'}
                fill='none'
                strokeWidth='1'
              />
              <circle
                cx='110'
                cy='20'
                r='3'
                fill={isDark ? '#A6E22E' : '#166534'}
              />
              <ellipse
                cx='95'
                cy='150'
                rx='8'
                ry='20'
                fill={isDark ? '#A6E22E' : '#166534'}
                transform='rotate(-30 95 150)'
              />
              <ellipse
                cx='115'
                cy='100'
                rx='6'
                ry='15'
                fill={isDark ? '#A6E22E' : '#166534'}
                transform='rotate(20 115 100)'
              />
            </svg>
          </div>
        </header>

        {/* 01. BUTTONS */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>01</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Buttons
            </h2>
          </div>

          <div
            className={`glass-card rounded-[32px] p-10 overflow-x-auto ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
          >
            <table className='w-full text-left'>
              <thead>
                <tr
                  className={`text-[10px] uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  <th className='pb-8 font-bold'>State</th>
                  <th className='pb-8 font-bold'>Primary</th>
                  <th className='pb-8 font-bold'>Secondary</th>
                  <th className='pb-8 font-bold'>Ghost</th>
                  <th className='pb-8 font-bold'>Pill / Tag</th>
                </tr>
              </thead>
              <tbody className='space-y-6'>
                {[
                  { label: 'Default', classes: '' },
                  {
                    label: 'Hover',
                    classes: 'brightness-110 translate-y-[-1px]',
                  },
                  { label: 'Active', classes: 'brightness-90 scale-[0.98]' },
                ].map((state) => (
                  <tr key={state.label}>
                    <td
                      className={`py-4 text-xs transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                    >
                      {state.label}
                    </td>
                    <td className='py-4'>
                      <button
                        className={`bg-[#A6E22E] text-black text-xs font-bold px-6 py-3 rounded-full flex items-center gap-3 transition-all shadow-lg shadow-lime-500/10 ${state.classes}`}
                      >
                        Primary Button <ArrowUpRight size={14} />
                      </button>
                    </td>
                    <td className='py-4'>
                      <button
                        className={`text-xs font-bold px-6 py-3 rounded-full flex items-center gap-3 transition-all border ${state.classes} ${isDark ? 'bg-white text-black border-transparent' : 'bg-slate-900 text-white border-slate-900'}`}
                      >
                        Secondary Button <ArrowUpRight size={14} />
                      </button>
                    </td>
                    <td className='py-4'>
                      <button
                        className={`border text-xs font-bold px-6 py-3 rounded-full flex items-center gap-3 transition-all ${state.classes} ${isDark ? 'border-zinc-700 text-white' : 'border-slate-300 text-slate-700'}`}
                      >
                        Ghost Button <ArrowUpRight size={14} />
                      </button>
                    </td>
                    <td className='py-4'>
                      <div
                        className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full transition-all ${state.classes} ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}
                      >
                        <Leaf size={12} className='text-lime-500' />
                        <span
                          className={`text-[10px] font-bold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}
                        >
                          Botanical
                        </span>
                        <div
                          className={`w-[1px] h-3 mx-1 ${isDark ? 'bg-zinc-700' : 'bg-slate-200'}`}
                        />
                        <span
                          className={`text-[10px] font-bold ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                        >
                          Logic
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 02. INPUTS & CONTROLS */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>02</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Inputs & Controls
            </h2>
          </div>

          <div
            className={`glass-card rounded-[32px] p-10 grid grid-cols-1 md:grid-cols-3 gap-12 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
          >
            {/* Text Inputs */}
            <div className='space-y-8'>
              <div className='space-y-3'>
                <p
                  className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  Text Input
                </p>
                <div className='relative group'>
                  <input
                    type='text'
                    placeholder='Type something...'
                    className={`w-full border rounded-xl px-4 py-3 text-sm input-focus transition-all pr-10 ${isDark ? 'bg-zinc-900/50 border-zinc-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
                  />
                  <Leaf
                    size={16}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${isDark ? 'text-zinc-600' : 'text-slate-300'} group-focus-within:text-lime-500`}
                  />
                </div>
              </div>

              <div className='space-y-4'>
                <p
                  className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  Toggle
                </p>
                <div className='flex items-center gap-4'>
                  <button
                    onClick={() => setToggle(!toggle)}
                    className={`w-12 h-6 rounded-full transition-all relative ${toggle ? 'bg-lime-500' : isDark ? 'bg-zinc-800' : 'bg-slate-200'}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${toggle ? 'left-7' : 'left-1'}`}
                    />
                  </button>
                  <button
                    className={`w-12 h-6 rounded-full transition-all relative border ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-slate-100 border-slate-200'}`}
                  >
                    <div className='absolute top-1 w-4 h-4 rounded-full bg-white transition-all left-1' />
                  </button>
                </div>
              </div>
            </div>

            {/* Search & Selection */}
            <div className='space-y-8'>
              <div className='space-y-3'>
                <p
                  className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  Search Field
                </p>
                <div className='relative'>
                  <Search
                    size={16}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                  />
                  <input
                    type='text'
                    placeholder='Search protocols...'
                    className={`w-full border rounded-full px-12 py-3 text-sm input-focus transition-all ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-4'>
                  <p
                    className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                  >
                    Checkbox
                  </p>
                  <div
                    className='flex items-center gap-3 cursor-pointer'
                    onClick={() => setCheckbox(!checkbox)}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${checkbox ? 'bg-lime-500 border-lime-500' : isDark ? 'border-zinc-700 bg-zinc-900' : 'border-slate-300 bg-white'}`}
                    >
                      {checkbox && (
                        <Check size={12} className='text-black font-black' />
                      )}
                    </div>
                    <span className='text-xs'>Checked</span>
                  </div>
                </div>
                <div className='space-y-4'>
                  <p
                    className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                  >
                    Radio
                  </p>
                  <div
                    className='flex items-center gap-3 cursor-pointer'
                    onClick={() =>
                      setRadio(radio === 'selected' ? '' : 'selected')
                    }
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${radio === 'selected' ? 'border-lime-500' : isDark ? 'border-zinc-700' : 'border-slate-300'}`}
                    >
                      {radio === 'selected' && (
                        <div className='w-2.5 h-2.5 rounded-full bg-lime-500' />
                      )}
                    </div>
                    <span className='text-xs'>Selected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown & Segmented */}
            <div className='space-y-8'>
              <div className='space-y-3'>
                <p
                  className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  Select
                </p>
                <div className='relative'>
                  <select
                    className={`w-full border rounded-xl px-4 py-3 text-sm appearance-none input-focus transition-all ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-slate-200'}`}
                  >
                    <option>Select an option</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                  />
                </div>
              </div>

              <div className='space-y-3'>
                <p
                  className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}
                >
                  Segmented Control
                </p>
                <div
                  className={`p-1 rounded-xl flex transition-colors border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}
                >
                  {['Option 1', 'Option 2'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSegmented(opt)}
                      className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${segmented === opt ? 'bg-[#A6E22E] text-black shadow-md' : isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. CARDS (Simplified for summary) */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>03</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Cards
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div
              className={`glass-card rounded-[24px] p-8 space-y-6 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <div className='flex justify-between items-start'>
                <p
                  className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                >
                  Photosynthesis Rate
                </p>
                <Leaf size={16} className='text-lime-500' />
              </div>
              <h3 className='text-4xl font-display tracking-tight'>98.7%</h3>
              <div className='w-full h-1 bg-zinc-800 rounded-full overflow-hidden'>
                <div className='w-full h-full bg-lime-500' />
              </div>
            </div>
            <div
              className={`glass-card rounded-[24px] p-8 space-y-6 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <div className='flex justify-between items-start'>
                <p
                  className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                >
                  System Status
                </p>
                <Activity size={16} className='text-lime-500' />
              </div>
              <h3 className='text-4xl font-display tracking-tight'>Optimal</h3>
              <p
                className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
              >
                All protocols executing normally.
              </p>
            </div>
          </div>
        </section>

        {/* 04. TYPOGRAPHY */}
        <section className='space-y-8'>
          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-lime-500'>06</span>
            <h2
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
            >
              Typography
            </h2>
          </div>
          <div
            className={`glass-card rounded-[32px] p-12 flex flex-col md:flex-row gap-16 ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
          >
            <div className='flex-1 space-y-8'>
              <div className='space-y-2'>
                <p
                  className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}
                >
                  Display
                </p>
                <h3 className='text-7xl font-display leading-[0.9]'>
                  Engineering life.
                </h3>
              </div>
              <div className='space-y-2'>
                <p
                  className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}
                >
                  Body
                </p>
                <p
                  className={`text-sm max-w-sm transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  Intelligence, automation, and ecological insight in a living
                  system that grows with you.
                </p>
              </div>
            </div>
            <div
              className={`md:w-64 space-y-8 md:border-l pl-8 transition-colors ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
            >
              <div>
                <p className='text-[10px] font-black uppercase text-lime-500'>
                  Playfair Display
                </p>
                <p
                  className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
                >
                  Heading / Serif
                </p>
              </div>
              <div>
                <p className='text-[10px] font-black uppercase text-lime-500'>
                  DM Sans
                </p>
                <p
                  className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
                >
                  Body / UI / Sans
                </p>
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
            © 2026 MIASYS BOTANICAL
          </p>
        </footer>
      </div>
    </div>
  );
}
