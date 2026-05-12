'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Leaf, Sprout, BarChart3, Settings, ArrowUpRight, Sun, Moon } from 'lucide-react';

import EvaImage from '@/assets/img/eva.jpg';
import MagaliImage from '@/assets/img/magali.jpg';
import MarthaImage from '@/assets/img/martha.jpg';
import LeafLogo from '@/assets/logo/leaf.svg';

const stackedImages = [
  {
    src: EvaImage,
    alt: 'Eva portrait',
    className: 'right-14 top-4 z-20 -rotate-6 opacity-55',
  },
  {
    src: MagaliImage,
    alt: 'Magali portrait',
    className: 'right-0 top-[170px] z-30 rotate-3 scale-105 opacity-100',
  },
  {
    src: MarthaImage,
    alt: 'Martha portrait',
    className: 'right-20 top-[336px] z-10 -rotate-3 opacity-55',
  },
];

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

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

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
      className={`min-h-screen overflow-x-hidden px-4 py-5 transition-colors duration-500 sm:p-6 md:p-12 ${isDark ? 'bg-[#090D10] text-[#F7F6F2]' : 'bg-[#E9E7E0] text-[#111416]'}`}
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
      <div className="mx-auto max-w-7xl space-y-8 md:space-y-16">
        {/* Top Header Section */}
        <header className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-[18px] border shadow-[0_0_32px_rgba(166,226,46,0.12)] transition-all sm:h-16 sm:w-16 sm:rounded-[26px] ${isDark ? 'border-[#A6E22E]/40 bg-[#A6E22E]/5 text-[#F7F6F2]' : 'border-[#739E1C]/40 bg-[#F7F6F2] text-[#516F12]'}`}
            >
              <span
                aria-hidden="true"
                className="h-6 w-6 bg-current sm:h-8 sm:w-8"
                style={{
                  maskImage: `url(${LeafLogo.src})`,
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskImage: `url(${LeafLogo.src})`,
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                }}
              />
            </div>
            <div>
              <h1
                className={`font-display text-3xl tracking-tight transition-colors sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                MiaSys
              </h1>
              <p
                className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors sm:text-[10px] sm:tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
              >
                Botanical Engineering <span className="ml-1 text-lime-500 sm:ml-2">v 0.1.0</span>
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end md:gap-6">
            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold leading-none text-lime-500">
                Organic Logic Interface
              </p>
              <p
                className={`mt-1 text-xs leading-none ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}
              >
                Software that helps growth. Engineered to evolve.
              </p>
            </div>
            <div
              className={`hidden h-10 w-px md:block ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`}
            />
            <button
              type="button"
              aria-label="Toggle color theme"
              className={`grid h-9 w-9 place-items-center rounded-full transition-all hover:scale-105 active:scale-95 ${isDark ? 'text-zinc-400 hover:bg-zinc-900' : 'text-slate-500 hover:bg-slate-200'}`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* Main Interface Card (The Hero Component) */}
        <div
          className={`relative w-full overflow-hidden rounded-[28px] border shadow-2xl transition-colors duration-500 sm:rounded-[36px] md:min-h-[600px] md:rounded-[48px] ${isDark ? 'border-white/20 bg-[#0B0F12] shadow-black/50' : 'border-white/80 bg-[#F7F6F2] shadow-[#867B68]/20'}`}
        >
          {/* Subtle Background Elements */}
          <div
            className={`absolute right-0 top-24 h-64 w-64 rounded-full opacity-20 blur-[80px] md:right-10 md:top-1/2 md:h-[400px] md:w-[400px] md:-translate-y-1/2 md:blur-[100px] ${isDark ? 'bg-lime-900' : 'bg-lime-200'}`}
          />

          <div className="pointer-events-auto absolute bottom-10 right-8 top-10 z-10 hidden w-[42%] md:block">
            <div className="relative h-full min-h-[500px]">
              {stackedImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`group absolute h-[178px] w-[320px] overflow-hidden rounded-[28px] border shadow-2xl transition-all duration-500 hover:z-40 hover:rotate-0 hover:scale-110 hover:opacity-100 ${image.className} ${isDark ? 'border-white/15 bg-white/[0.04] shadow-black/60 hover:border-[#A6E22E]/60 hover:shadow-[0_24px_70px_rgba(166,226,46,0.20)]' : 'border-white/80 bg-white/75 shadow-[#867B68]/25 hover:border-[#A6E22E]/70 hover:shadow-[0_24px_70px_rgba(134,123,104,0.34)]'}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 40vw"
                    className="object-cover"
                    priority={index === 1}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-35 ${isDark ? 'bg-gradient-to-br from-white/5 via-transparent to-black/35' : 'bg-gradient-to-br from-white/30 via-transparent to-black/10'}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-8 p-5 sm:p-8 md:min-h-[600px] md:flex-row md:p-16">
            {/* Sidebar UI Component */}
            <aside
              className={`flex w-full items-center justify-between gap-3 self-center rounded-[24px] px-3 py-3 sm:w-auto sm:justify-center sm:gap-5 md:flex-col md:gap-8 md:rounded-[32px] md:px-4 md:py-8 ${isDark ? 'glass-dark' : 'glass-light'}`}
            >
              <button
                type="button"
                aria-label="Show growth dashboard"
                className={`rounded-2xl p-3 transition-all sm:p-4 ${isDark ? 'bg-lime-500/10 text-lime-400 ring-1 ring-lime-500/50 glow-lime' : 'bg-white shadow-sm text-lime-700'}`}
              >
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                aria-label="Show analytics"
                className={`rounded-2xl p-3 opacity-40 transition-all hover:opacity-100 sm:p-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                aria-label="Show plant systems"
                className={`rounded-2xl p-3 opacity-40 transition-all hover:opacity-100 sm:p-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <Sprout className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                aria-label="Show settings"
                className={`rounded-2xl p-3 opacity-40 transition-all hover:opacity-100 sm:p-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </aside>

            {/* Content Area */}
            <main className="flex max-w-xl flex-col justify-between gap-8 self-stretch md:ml-16">
              <div className="space-y-5 md:space-y-6">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.3em] ${isDark ? 'text-lime-500' : 'text-lime-700'}`}
                >
                  Organic Logic
                </span>
                <h2
                  className={`font-display text-5xl leading-[1.02] tracking-normal transition-colors sm:text-6xl md:text-7xl md:leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  Engineering life.
                  <br />
                  <span className="italic font-normal">With intention.</span>
                </h2>
                <p
                  className={`max-w-sm text-base leading-relaxed transition-colors sm:text-lg ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                >
                  MiaSys unites botanical intelligence, automation, and ecological insight in a
                  living system that grows with you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <button
                  type="button"
                  className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#A6E22E] px-6 py-4 font-semibold text-black shadow-lg shadow-lime-500/20 transition-all hover:scale-105 hover:bg-[#95cc29] active:scale-95 sm:px-8"
                >
                  Explore the Studio <ArrowUpRight size={20} />
                </button>
                <button
                  type="button"
                  className={`flex min-h-14 items-center justify-center gap-3 rounded-full border px-6 py-4 font-semibold transition-all hover:scale-105 active:scale-95 sm:px-8 ${isDark ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  View Protocols <ArrowUpRight size={20} />
                </button>
              </div>
            </main>

            <div className="grid grid-cols-3 gap-3 md:hidden">
              {stackedImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative aspect-[4/5] overflow-hidden rounded-[20px] border shadow-xl ${isDark ? 'border-white/15 bg-white/[0.04] shadow-black/40' : 'border-white/80 bg-white/75 shadow-[#867B68]/20'}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 767px) 30vw"
                    className="object-cover"
                    priority={index === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Style Guide / Footer Component */}
        <section
          className={`rounded-[24px] border p-5 transition-colors duration-500 sm:p-8 md:rounded-[28px] md:p-10 ${isDark ? 'border-white/20 bg-[#0B0F12]' : 'border-black/10 bg-[#F7F6F2]'}`}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {/* Color System */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
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
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Amber', hex: colors.amber },
                  { name: 'Rose', hex: colors.rose },
                  { name: 'Lime', hex: colors.lime },
                  { name: 'Azure', hex: colors.azure },
                  { name: 'Midnight', hex: colors.midnight },
                  { name: 'Paper', hex: colors.paper },
                ].map((c) => (
                  <div key={c.name} className="space-y-2">
                    <div
                      className="h-14 w-full rounded-xl border border-white/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="space-y-0.5">
                      <p
                        className={`text-[10px] font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                      >
                        {c.name}
                      </p>
                      <p className="text-[9px] text-zinc-500 uppercase">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div
              className={`space-y-6 border-t pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
            >
              <div className="flex items-center gap-3">
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
              <div className="space-y-8">
                <div className="flex items-baseline gap-6">
                  <span
                    className={`text-5xl font-display ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Aa
                  </span>
                  <div className="space-y-0.5">
                    <p
                      className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                    >
                      Cormorant Garamond
                    </p>
                    <p className="text-[10px] text-zinc-500">Display / Headings</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-6">
                  <span
                    className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Aa
                  </span>
                  <div className="space-y-0.5">
                    <p
                      className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-slate-900'}`}
                    >
                      Manrope
                    </p>
                    <p className="text-[10px] text-zinc-500">Medium / Semibold / Body / UI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div
              className={`space-y-6 border-t pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
            >
              <div className="flex items-center gap-3">
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
              <div className="flex flex-wrap items-center gap-4">
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
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-lime-500 text-[10px] font-bold uppercase tracking-widest text-black"
                >
                  Primary <ArrowUpRight size={14} />
                </button>
                <button
                  type="button"
                  aria-label="Open component detail"
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${isDark ? 'border-zinc-800 text-white' : 'border-slate-200 bg-slate-100 text-slate-900'}`}
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 border-t pt-6 opacity-60 sm:flex-row sm:items-center sm:justify-between md:mt-12 md:pt-8 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
          >
            <div className="flex max-w-sm items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:tracking-[0.2em]">
              <Leaf size={12} className="text-lime-500" />
              Organic by logic.{' '}
              <span className="text-lime-500 font-bold">Engineered for life.</span>
            </div>
            <p className="text-[10px] text-zinc-500">
              © 2026 MIASYS BOTANICAL SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
