'use client';

import { useState } from 'react';
import Image from 'next/image';
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

import EvaImage from '@/assets/img/eva.jpg';
import MagaliImage from '@/assets/img/magali.jpg';
import MarthaImage from '@/assets/img/martha.jpg';

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

  const surfaceClass = isDark
    ? 'border-white/10 bg-[#0B0F12]/95 shadow-black/40'
    : 'border-black/10 bg-white/85 shadow-[#867B68]/15';

  const insetClass = isDark
    ? 'border-white/10 bg-white/[0.03]'
    : 'border-black/10 bg-[#F7F6F2]';

  const stackedCardClass = isDark
    ? 'border-white/10 bg-[#202326] shadow-[0_18px_42px_rgba(0,0,0,0.28)]'
    : insetClass;

  const stackedBackCardClass = isDark
    ? 'border-white/10 bg-[#15191D] shadow-[0_12px_28px_rgba(0,0,0,0.24)]'
    : insetClass;

  const mutedTextClass = isDark ? 'text-zinc-500' : 'text-slate-500';
  const subtleTextClass = isDark ? 'text-zinc-400' : 'text-slate-600';
  const dividerClass = isDark ? 'border-white/10' : 'border-black/10';

  const botanicalImages = [
    { src: EvaImage, alt: 'Eva botanical system portrait' },
    { src: MagaliImage, alt: 'Magali botanical system portrait' },
    { src: MarthaImage, alt: 'Martha botanical system portrait' },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-700 md:p-16 ${isDark ? 'bg-[#0D0F13] text-white' : 'bg-[#F7F6F2] text-slate-900'}`}
    >
      <style>
        {`
          .glass-card { backdrop-filter: blur(12px); transition: all 0.4s ease; }
          .glass-card-dark { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); }
          .glass-card-light { background: rgba(0, 0, 0, 0.02); border: 1px solid rgba(0, 0, 0, 0.06); }
          .grid-line { background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px; }
          .layout-grid-columns {
            background-image:
              linear-gradient(90deg, rgba(166, 226, 46, 0.12) 1px, transparent 1px),
              linear-gradient(180deg, rgba(166, 226, 46, 0.08) 1px, transparent 1px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 24px, transparent 24px 48px);
            background-size: 24px 24px, 24px 24px, 100% 100%;
          }
          .measuring-box {
            background-image:
              linear-gradient(90deg, rgba(166, 226, 46, 0.22) 1px, transparent 1px),
              linear-gradient(180deg, rgba(166, 226, 46, 0.22) 1px, transparent 1px);
            background-size: 24px 24px;
          }
          .hairline-chart {
            background:
              linear-gradient(180deg, transparent 0 31%, rgba(166,226,46,0.11) 31% 32%, transparent 32% 64%, rgba(166,226,46,0.09) 64% 65%, transparent 65%),
              linear-gradient(90deg, transparent 0 18%, rgba(166,226,46,0.10) 18% 19%, transparent 19% 49%, rgba(166,226,46,0.10) 49% 50%, transparent 50% 78%, rgba(166,226,46,0.10) 78% 79%, transparent 79%);
          }
        `}
      </style>

      <div className='relative mx-auto max-w-6xl space-y-8 md:space-y-12'>
        {/* Top Header Section */}
        <header className='flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-8'>
          <div className='flex items-center gap-4 sm:gap-6'>
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-[18px] border shadow-[0_0_32px_rgba(166,226,46,0.12)] transition-all sm:h-16 sm:w-16 sm:rounded-[26px] ${isDark ? 'border-[#A6E22E]/40 bg-[#A6E22E]/5 text-[#F7F6F2]' : 'border-[#739E1C]/40 bg-[#F7F6F2] text-[#516F12]'}`}
            >
              <Leaf className='h-6 w-6 sm:h-8 sm:w-8' strokeWidth={1.5} />
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
                Layout & Patterns{' '}
                <span className='ml-1 text-lime-500 sm:ml-2'>v 0.1.0</span>
              </p>
            </div>
          </div>

          <div className='flex w-full items-center justify-between gap-4 md:w-auto md:justify-end md:gap-6'>
            <div className='hidden text-right md:block'>
              <p className='text-sm font-semibold leading-none text-lime-500'>
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
              type='button'
              aria-label='Toggle color theme'
              className={`grid h-9 w-9 place-items-center rounded-full transition-all hover:scale-105 active:scale-95 ${isDark ? 'text-zinc-400 hover:bg-zinc-900' : 'text-slate-500 hover:bg-slate-200'}`}
              onClick={toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* 07. SPACING & LAYOUT */}
        <section
          className={`glass-card rounded-[24px] border p-5 shadow-2xl sm:p-6 md:p-7 ${surfaceClass}`}
        >
          <div className='mb-7 flex items-center gap-5'>
            <span className='text-lg font-semibold text-lime-500'>07</span>
            <h2 className='text-xl font-light uppercase tracking-wide'>
              Spacing & Layout
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 border-b pb-7 md:grid-cols-[1.25fr_1fr_1.55fr] md:divide-x ${dividerClass} md:divide-white/10`}
          >
            <div className='space-y-5 md:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                8pt Spacing Scale
              </p>
              <div className='flex h-24 items-end gap-2'>
                {[4, 16, 24, 32, 40, 56, 64, 72, 80, 96].map((size, index) => (
                  <div key={size} className='flex flex-1 flex-col items-center gap-3'>
                    <div
                      className={`w-full rounded-sm ${index > 7 ? 'bg-lime-100' : 'bg-lime-500/30'}`}
                      style={{ height: `${Math.max(size / 1.35, 10)}px` }}
                    />
                    <span className={`text-[8px] ${mutedTextClass}`}>{size}</span>
                  </div>
                ))}
              </div>
              <p className={`text-[10px] ${mutedTextClass}`}>Base unit: 8px</p>
            </div>

            <div className='space-y-5 md:px-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Container Margins (Desktop)
              </p>
              <div
                className={`measuring-box relative flex h-24 items-center justify-between overflow-hidden rounded-xl border px-3 text-[10px] ${insetClass}`}
              >
                <span className='text-lime-300'>64px</span>
                <span className='rounded-md bg-black/20 px-3 py-2 text-white'>
                  Max 1280px
                </span>
                <span className='text-lime-300'>64px</span>
              </div>
              <p className={`text-center text-[10px] ${mutedTextClass}`}>Centered</p>
            </div>

            <div className='space-y-5 md:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Padding Examples (Inside Cards)
              </p>
              <div className='grid grid-cols-3 gap-4'>
                {[16, 24, 32].map((padding) => (
                  <div key={padding} className='space-y-3 text-center'>
                    <div
                      className={`measuring-box relative grid h-24 place-items-center rounded-xl border ${insetClass}`}
                    >
                      <div
                        className='absolute inset-0 border border-dashed border-lime-500/20'
                        style={{ margin: `${padding / 2}px` }}
                      />
                      <span className='text-[11px]'>{padding}px</span>
                    </div>
                    <p className={`text-[10px] ${mutedTextClass}`}>
                      {padding === 16 ? 'Compact' : padding === 24 ? 'Comfortable' : 'Spacious'}
                      <br />
                      {padding}px
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 border-b py-7 lg:grid-cols-[2fr_1fr] lg:divide-x ${dividerClass} lg:divide-white/10`}
          >
            <div className='space-y-5 lg:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Column Grid Examples
              </p>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-start'>
                <div className='space-y-3'>
                  <p className='text-xs uppercase tracking-wide'>
                    Desktop - 12 Column Grid (1280px)
                  </p>
                  <div
                    className={`layout-grid-columns grid h-32 place-items-center rounded-xl border ${insetClass}`}
                  >
                    <span className='rounded-md bg-black/30 px-3 py-2 text-sm font-semibold text-white'>
                      12 Columns
                    </span>
                  </div>
                  <p className={`text-[10px] ${mutedTextClass}`}>
                    Column: 72px <span className='px-2'>|</span> Gutter: 24px{' '}
                    <span className='px-2'>|</span> Margin: 64px
                  </p>
                </div>
                <div className='space-y-3 md:justify-self-end'>
                  <p className='text-xs uppercase tracking-wide'>
                    Mobile - 4 Column Grid (360px)
                  </p>
                  <div
                    className={`layout-grid-columns grid h-32 w-[150px] place-items-center rounded-xl border ${insetClass}`}
                  >
                    <span className='rounded-md bg-black/30 px-3 py-2 text-sm font-semibold text-white'>
                      4 Columns
                    </span>
                  </div>
                  <p className={`text-[10px] ${mutedTextClass}`}>
                    Column: 72px <span className='px-2'>|</span> Gutter: 16px
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-5 lg:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Gap Sizing
              </p>
              <div className='grid grid-cols-1 gap-6'>
                <div className='space-y-5'>
                  <div className='space-y-3'>
                    <p className={`text-[10px] ${mutedTextClass}`}>Horizontal Gaps</p>
                    <div className='flex items-end gap-4'>
                      {[8, 16, 24, 32, 48].map((gap) => (
                        <div key={gap} className='space-y-2'>
                          <div
                            className='rounded-sm bg-lime-500/50'
                            style={{ width: `${gap}px`, height: 18 }}
                          />
                          <p className={`text-[9px] ${mutedTextClass}`}>{gap}px</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <p className={`text-[10px] ${mutedTextClass}`}>Vertical Gaps</p>
                    <div className='grid grid-cols-5 items-end gap-3'>
                      {[8, 16, 24, 32, 48].map((gap) => (
                        <div key={gap} className='space-y-2'>
                          <div className='space-y-1'>
                            <div className='h-2 rounded-sm bg-lime-500/50' />
                            <div style={{ height: `${gap / 4}px` }} />
                            <div className='h-2 rounded-sm bg-lime-500/50' />
                          </div>
                          <p className={`text-[9px] ${mutedTextClass}`}>{gap}px</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-5 pt-7'>
            <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
              Layout Rules
            </p>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                { icon: LayoutGrid, label: 'Maintain consistent spacing' },
                { icon: Database, label: 'Use grid structure' },
                { icon: Leaf, label: 'Prioritize clean navigation' },
                { icon: Smartphone, label: 'Responsive from desktop to mobile' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className={`flex min-h-16 items-center gap-4 rounded-xl border px-5 ${insetClass}`}
                >
                  <Icon className='h-5 w-5 shrink-0 text-lime-500' strokeWidth={1.5} />
                  <span className='text-sm leading-snug'>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08. CARDS & LISTS */}
        <section
          className={`glass-card rounded-[24px] border p-5 shadow-2xl sm:p-6 md:p-7 ${surfaceClass}`}
        >
          <div className='mb-7 flex items-center gap-5'>
            <span className='text-lg font-semibold text-lime-500'>08</span>
            <h2 className='text-xl font-light uppercase tracking-wide'>
              Cards & Lists
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 border-b pb-7 xl:grid-cols-[2fr_1.15fr] xl:divide-x ${dividerClass} xl:divide-white/10`}
          >
            <div className='space-y-5 xl:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Card Anatomy
              </p>
              <div className='flex flex-col gap-5 md:flex-row md:items-center'>
                <div className={`w-full max-w-xs rounded-2xl border p-5 ${insetClass}`}>
                  <div className='mb-5 flex items-start justify-between'>
                    <div>
                      <h3 className='font-display text-lg'>Card Title</h3>
                      <p className={`text-[10px] ${mutedTextClass}`}>
                        Primary description goes here.
                      </p>
                    </div>
                    <div className='grid h-9 w-9 place-items-center rounded-xl border border-lime-500/30 text-lime-500'>
                      <Leaf size={16} />
                    </div>
                  </div>
                  <div className='hairline-chart mb-5 h-20 rounded-lg p-3'>
                    <svg viewBox='0 0 220 60' className='h-full w-full text-lime-500'>
                      <polyline
                        points='0,47 20,40 36,44 58,32 78,38 98,25 116,31 136,20 154,26 174,15 190,18 210,7'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                    </svg>
                  </div>
                  <div className={`flex items-center justify-between border-t pt-4 ${dividerClass}`}>
                    <span className={`flex items-center gap-2 text-[10px] ${mutedTextClass}`}>
                      <span className='h-2 w-2 rounded-full bg-lime-500' />
                      Status
                    </span>
                    <ArrowUpRight size={14} className='text-lime-500' />
                  </div>
                </div>
                <div className={`space-y-5 text-[10px] ${mutedTextClass}`}>
                  {[
                    ['Header', 'Title, icon, actions'],
                    ['Body', 'Primary content and information'],
                    ['Footer', 'Metadata, status, actions'],
                  ].map(([label, text]) => (
                    <div key={label} className='flex items-center gap-3'>
                      <span className='w-14 font-semibold text-lime-500'>{label}</span>
                      <span className='h-px flex-1 border-t border-dashed border-lime-500/30' />
                      <span className='w-28'>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='space-y-5 xl:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Stacked Cards
              </p>
              <div className='relative h-40'>
                {[0, 1, 2].map((offset) => (
                  <div
                    key={offset}
                    className={`absolute h-28 w-[88%] rounded-2xl border ${stackedBackCardClass}`}
                    style={{
                      right: `${offset * 14}px`,
                      top: `${offset * 10}px`,
                      opacity: isDark ? 1 : 1 - offset * 0.16,
                    }}
                  />
                ))}
                <div className={`absolute left-0 top-8 w-[84%] rounded-2xl border p-5 ${stackedCardClass}`}>
                  <div className='flex items-start gap-4'>
                    <div className='grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lime-500/30 text-lime-500'>
                      <Leaf size={16} />
                    </div>
                    <div>
                      <h3 className='font-display text-lg'>Growth Optimizer</h3>
                      <p className={`mt-1 max-w-[190px] text-[10px] leading-relaxed ${mutedTextClass}`}>
                        Optimizes light, nutrients and circadian balance.
                      </p>
                    </div>
                    <ArrowUpRight className='ml-auto mt-auto text-lime-500' size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 border-b py-7 xl:grid-cols-[1.55fr_1.05fr_0.65fr] xl:divide-x ${dividerClass} xl:divide-white/10`}
          >
            <div className='space-y-5 xl:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Card Examples
              </p>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                <div className={`min-h-40 rounded-2xl border p-5 ${insetClass}`}>
                  <p className={`text-[10px] ${mutedTextClass}`}>Photosynthesis Rate</p>
                  <p className='mt-4 font-display text-4xl'>98.7%</p>
                  <div className='mt-4 h-10'>
                    <svg viewBox='0 0 170 40' className='h-full w-full text-lime-500'>
                      <polyline
                        points='0,34 16,26 32,31 48,18 63,24 78,12 94,20 110,11 126,15 142,5 160,9 170,2'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                    </svg>
                  </div>
                  <p className='mt-3 text-[10px] text-lime-500'>+12.4% vs last 7 days</p>
                </div>
                <div className={`min-h-40 rounded-2xl border p-5 ${insetClass}`}>
                  <div className='flex items-center justify-between'>
                    <p className={`text-[10px] ${mutedTextClass}`}>System Status</p>
                    <BarChart3 size={18} className='text-lime-500' />
                  </div>
                  <p className='mt-6 font-display text-2xl'>Optimal</p>
                  <p className={`mt-5 text-[10px] leading-relaxed ${mutedTextClass}`}>
                    All systems operational
                    <br />
                    Last checked 2m ago
                  </p>
                </div>
                <div className={`relative min-h-40 overflow-hidden rounded-2xl border p-5 ${insetClass}`}>
                  <p className={`text-[10px] ${mutedTextClass}`}>Protocol</p>
                  <p className='relative z-10 mt-3 font-display text-xl'>Root Harmony</p>
                  <div className='absolute right-0 top-0 h-full w-1/2'>
                    <Image
                      src={botanicalImages[2].src}
                      alt={botanicalImages[2].alt}
                      fill
                      sizes='160px'
                      className='object-cover opacity-70'
                    />
                  </div>
                  <div className='absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between text-[10px]'>
                    <span className={mutedTextClass}>Active - 12 steps</span>
                    <ArrowUpRight size={14} className='text-lime-500' />
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-5 xl:px-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                List Item Examples
              </p>
              <div className={`overflow-hidden rounded-2xl border ${insetClass}`}>
                {[
                  ['Lumiere Protocol', 'Growth - 12 steps', 'Active', botanicalImages[0]],
                  ['Soil Balance', 'Nutrition - 8 steps', 'Draft', botanicalImages[1]],
                  ['Bloom Phase', 'Flowering - 10 steps', 'Completed', botanicalImages[2]],
                ].map(([title, meta, status, image]) => (
                  <div
                    key={title as string}
                    className={`flex items-center gap-3 border-b p-3 last:border-b-0 ${dividerClass}`}
                  >
                    <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-lg'>
                      <Image
                        src={(image as (typeof botanicalImages)[number]).src}
                        alt={(image as (typeof botanicalImages)[number]).alt}
                        fill
                        sizes='40px'
                        className='object-cover'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-xs font-semibold'>{title as string}</p>
                      <p className={`truncate text-[10px] ${mutedTextClass}`}>{meta as string}</p>
                    </div>
                    <span className={`flex items-center gap-2 text-[10px] ${mutedTextClass}`}>
                      <span className='h-1.5 w-1.5 rounded-full bg-lime-500' />
                      {status as string}
                    </span>
                    <ArrowUpRight size={14} className='text-lime-500' />
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-5 xl:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Compact List Item
              </p>
              <div className={`overflow-hidden rounded-2xl border ${insetClass}`}>
                {[
                  { label: 'Environment', icon: Database },
                  { label: 'Irrigation', icon: Sprout },
                  { label: 'Lighting', icon: Sun },
                  { label: 'Nutrition', icon: Leaf },
                  { label: 'Diagnostics', icon: Settings },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between border-b px-4 py-3 last:border-b-0 ${dividerClass}`}
                  >
                    <span className={`flex items-center gap-3 text-[10px] ${mutedTextClass}`}>
                      <Icon className='h-4 w-4 text-lime-500' />
                      {label}
                    </span>
                    <ArrowUpRight size={12} className='text-lime-500' />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 pt-7 xl:grid-cols-[1.05fr_0.95fr_1fr] xl:divide-x ${dividerClass} xl:divide-white/10`}
          >
            <div className='space-y-5 xl:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Content Hierarchy & Spacing
              </p>
              <div className={`relative rounded-2xl border p-5 ${insetClass}`}>
                <div className='flex items-start gap-4'>
                  <div className='grid h-12 w-12 place-items-center rounded-xl border border-lime-500/30 text-lime-500'>
                    <Leaf size={18} />
                  </div>
                  <div className='space-y-1'>
                    <p className='font-display text-lg'>Title Example</p>
                    <p className={`text-[10px] ${mutedTextClass}`}>Secondary information</p>
                    <p className={`text-[9px] ${mutedTextClass}`}>Tertiary details or metadata</p>
                  </div>
                </div>
                <div className='absolute right-4 top-6 space-y-2 text-[9px] text-lime-500'>
                  <p>24px</p>
                  <p>8px</p>
                  <p>8px</p>
                </div>
              </div>
            </div>

            <div className='space-y-5 xl:px-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Spacing Inside Card
              </p>
              <div className={`measuring-box relative rounded-2xl border p-6 ${insetClass}`}>
                <div className={`rounded-xl border p-4 ${insetClass}`}>
                  <div className='flex items-center gap-3'>
                    <div className='grid h-9 w-9 place-items-center rounded-lg border border-lime-500/30 text-lime-500'>
                      <Leaf size={14} />
                    </div>
                    <div>
                      <p className='text-xs'>Primary information</p>
                      <p className={`text-[9px] ${mutedTextClass}`}>Secondary metadata</p>
                    </div>
                  </div>
                </div>
                <span className='absolute left-4 top-1 text-[9px] text-lime-500'>24px</span>
                <span className='absolute right-4 top-1 text-[9px] text-lime-500'>24px</span>
                <span className='absolute bottom-2 left-1/2 text-[9px] text-lime-500'>16px</span>
              </div>
            </div>

            <div className='space-y-5 xl:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Border & Shadow
              </p>
              <div className='grid grid-cols-2 gap-5'>
                <div className='space-y-3'>
                  <p className={`text-[10px] ${mutedTextClass}`}>Resting</p>
                  <div className={`h-32 rounded-2xl border ${insetClass}`} />
                </div>
                <div className='space-y-3'>
                  <p className={`text-[10px] ${mutedTextClass}`}>Hover</p>
                  <div
                    className={`h-32 rounded-2xl border border-lime-500/40 shadow-[0_0_38px_rgba(166,226,46,0.30)] ${insetClass}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. NAVIGATION / TABS */}
        <section
          className={`glass-card rounded-[24px] border p-5 shadow-2xl sm:p-6 md:p-7 ${surfaceClass}`}
        >
          <div className='mb-7 flex items-center gap-5'>
            <span className='text-lg font-semibold text-lime-500'>09</span>
            <h2 className='text-xl font-light uppercase tracking-wide'>
              Navigation / Tabs
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 border-b pb-7 xl:grid-cols-[1.2fr_0.8fr_1fr] xl:divide-x ${dividerClass} xl:divide-white/10`}
          >
            <div className='space-y-5 xl:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Top Navigation Bar
              </p>
              <nav className={`flex h-14 items-center justify-between rounded-2xl border px-4 ${insetClass}`}>
                <div className='flex items-center gap-5'>
                  <div className='grid h-9 w-9 place-items-center rounded-xl border border-lime-500/30 text-lime-500'>
                    <Leaf size={16} />
                  </div>
                  <span className='font-display text-lg'>MiaSys</span>
                  <div className='hidden items-center gap-5 md:flex'>
                    {['Studio', 'Protocols', 'Library', 'Journal', 'Insights'].map((item) => (
                      <button
                        key={item}
                        type='button'
                        className={`relative text-[10px] transition-colors ${
                          activeTab === item ? 'text-lime-500' : mutedTextClass
                        }`}
                        onClick={() => setActiveTab(item)}
                      >
                        {item}
                        {activeTab === item && (
                          <span className='absolute -bottom-3 left-0 h-px w-full bg-lime-500' />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Search size={16} className={mutedTextClass} />
                  <Bell size={16} className={mutedTextClass} />
                  <div className='relative h-8 w-8 overflow-hidden rounded-full border border-lime-500/30'>
                    <Image
                      src={botanicalImages[0].src}
                      alt={botanicalImages[0].alt}
                      fill
                      sizes='32px'
                      className='object-cover'
                    />
                  </div>
                </div>
              </nav>

              <div className='space-y-5'>
                <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                  Horizontal Tabs
                </p>
                <div className={`flex flex-wrap gap-7 border-b ${dividerClass}`}>
                  {['Studio', 'Protocols', 'Library', 'Journal'].map((tab) => (
                    <button
                      key={tab}
                      type='button'
                      onClick={() => setActiveTab(tab)}
                      className={`relative pb-3 text-xs ${
                        activeTab === tab ? 'text-lime-500' : mutedTextClass
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <span className='absolute bottom-0 left-0 h-px w-full bg-lime-500' />
                      )}
                    </button>
                  ))}
                </div>
                <div className={`flex max-w-sm rounded-full border p-1 ${insetClass}`}>
                  {['Overview', 'Activity', 'Analytics', 'Settings'].map((tab) => (
                    <button
                      key={tab}
                      type='button'
                      className={`flex-1 rounded-full px-3 py-2 text-[10px] ${
                        tab === 'Overview' ? 'bg-lime-500/20 text-lime-400' : mutedTextClass
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className='space-y-5 xl:px-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Side Navigation Rail
              </p>
              <div className='flex gap-5'>
                <aside className={`flex w-14 flex-col items-center gap-5 rounded-2xl border py-4 ${insetClass}`}>
                  {[Leaf, BarChart3, Sprout, FileText, Settings].map((Icon, index) => (
                    <button
                      key={Icon.displayName ?? index}
                      type='button'
                      aria-label={`Show navigation item ${index + 1}`}
                      className={`grid h-8 w-8 place-items-center rounded-lg ${
                        index === 0 ? 'bg-lime-500/15 text-lime-500' : mutedTextClass
                      }`}
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </aside>
                <div className='flex-1 space-y-4'>
                  {[
                    ['Studio', 'Overview & control'],
                    ['Protocols', 'Automation & flows'],
                    ['Library', 'Resources & assets'],
                    ['Journal', 'Notes & records'],
                    ['Settings', 'Preferences'],
                  ].map(([label, desc]) => (
                    <div key={label} className='space-y-0.5'>
                      <p className='text-xs'>{label}</p>
                      <p className={`text-[10px] ${mutedTextClass}`}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='space-y-5 xl:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Responsive Navigation
              </p>
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <p className={`text-[10px] ${mutedTextClass}`}>Desktop</p>
                  <div className={`flex h-12 items-center justify-between rounded-2xl border px-4 ${insetClass}`}>
                    <Leaf size={16} className='text-lime-500' />
                    <div className='flex gap-4 text-[10px]'>
                      <span>Studio</span>
                      <span className={mutedTextClass}>Protocols</span>
                      <span className={mutedTextClass}>Library</span>
                      <span className={mutedTextClass}>Journal</span>
                    </div>
                    <Search size={15} className={mutedTextClass} />
                  </div>
                </div>
                <div className='space-y-2'>
                  <p className={`text-[10px] ${mutedTextClass}`}>Mobile</p>
                  <div className={`flex h-14 items-center justify-between rounded-2xl border px-4 ${insetClass}`}>
                    <Leaf size={16} className='text-lime-500' />
                    <span className='text-xs'>Studio</span>
                    <Settings size={16} className='text-lime-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 pt-7 lg:grid-cols-[0.95fr_1fr_1fr] lg:divide-x ${dividerClass} lg:divide-white/10`}
          >
            <div className='space-y-5 lg:pr-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Tab States
              </p>
              <div className='grid grid-cols-3 gap-5'>
                {[
                  ['Active', 'text-lime-500 border-lime-500'],
                  ['Inactive', `${mutedTextClass} border-white/10`],
                  ['Hover', `${subtleTextClass} border-lime-500/30`],
                ].map(([label, classes]) => (
                  <div key={label} className='space-y-3'>
                    <p className={`text-[10px] ${mutedTextClass}`}>{label}</p>
                    <div className={`border-b pb-2 text-sm ${classes}`}>Studio</div>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-5 lg:px-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Segmented Tabs
              </p>
              <div className={`flex max-w-sm rounded-full border p-1 ${insetClass}`}>
                {['Day', 'Week', 'Month', 'Year'].map((seg) => (
                  <button
                    key={seg}
                    type='button'
                    onClick={() => setActiveSegment(seg)}
                    className={`flex-1 rounded-full px-4 py-3 text-xs transition ${
                      activeSegment === seg
                        ? 'bg-lime-500/25 text-lime-300 shadow-[0_0_24px_rgba(166,226,46,0.20)]'
                        : mutedTextClass
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>
            </div>

            <div className='space-y-5 lg:pl-6'>
              <p className={`text-[10px] uppercase tracking-widest ${mutedTextClass}`}>
                Navigation Notes
              </p>
              <div className='space-y-3'>
                {[
                  'Integrates into dashboards',
                  'Works in forms and flows',
                  'Adapts across breakpoints',
                ].map((note) => (
                  <div key={note} className='flex items-center gap-3'>
                    <span className='grid h-5 w-5 place-items-center rounded-full border border-lime-500 text-lime-500'>
                      <Check size={12} />
                    </span>
                    <span className='text-sm'>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`mx-auto flex w-fit items-center gap-3 rounded-full border px-7 py-4 text-sm transition-colors ${insetClass}`}
        >
          <div className='grid h-9 w-9 place-items-center rounded-xl border border-lime-500/30 text-lime-500'>
            <Leaf size={16} />
          </div>
          <span className={subtleTextClass}>Organic by logic.</span>
          <span className='text-lime-500'>Engineered for life.</span>
        </footer>
      </div>
    </div>
  );
}
