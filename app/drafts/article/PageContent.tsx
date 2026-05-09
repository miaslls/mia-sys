'use client';

import { useState } from 'react';
import Image from 'next/image';
import WednesdayImage from '@/assets/img/wednesday.jpg';
import EvaImage from '@/assets/img/eva.jpg';
import MagaliImage from '@/assets/img/magali.jpg';
import MarthaImage from '@/assets/img/martha.jpg';
import PriscillaImage from '@/assets/img/priscilla.jpg';
import {
  Leaf,
  Sprout,
  BarChart3,
  Settings,
  ArrowUpRight,
  Search,
  ChevronDown,
  Sun,
  Moon,
  LayoutGrid,
  BookOpen,
  History,
  ArrowLeft,
  ArrowRight,
  Command,
  Circle,
  Square,
} from 'lucide-react';

/**
 * MiaSys Design Philosophy Article v0.1.0
 * Features:
 * - Persistent Sidebar Navigation
 * - Rich Editorial Layout
 * - Adaptive Theme (Midnight/Paper)
 * - Glassmorphic Callouts & Sidebar Elements
 */

export default function ArticlePageContent() {
  const [theme, setTheme] = useState('dark');

  const isDark = theme === 'dark';
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const colors = {
    lime: '#A6E22E',
    midnight: '#0D0F13',
    paper: '#F7F6F2',
  };

  // Sidebar Menu Items
  const menuItems = [
    { icon: LayoutGrid, label: 'Overview' },
    { icon: BarChart3, label: 'Foundations' },
    { icon: Settings, label: 'Components' },
    { icon: Square, label: 'Patterns' },
    { icon: Leaf, label: 'Content', active: true },
    { icon: BookOpen, label: 'Resources' },
    { icon: History, label: 'Changelog' },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-700  flex ${isDark ? `bg-[${colors.midnight}] text-zinc-300` : `bg-[${colors.paper}] text-slate-700`}`}
    >
      <style>
        {`
          .glass-panel { backdrop-filter: blur(12px); transition: all 0.4s ease; }
          .glass-panel-dark { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); }
          .glass-panel-light { background: rgba(0, 0, 0, 0.02); border: 1px solid rgba(0, 0, 0, 0.06); }
          .sidebar-active { background: rgba(166, 226, 46, 0.1); border-color: rgba(166, 226, 46, 0.3); color: #A6E22E; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        `}
      </style>

      {/* Left Sidebar */}
      <aside
        className={`w-72 hidden lg:flex flex-col border-r sticky top-0 h-screen p-8 transition-colors ${isDark ? 'bg-[#0D0F13] border-zinc-800' : 'bg-white border-slate-200'}`}
      >
        <div className='flex items-center gap-3 mb-12'>
          <div className='p-2 rounded-xl bg-lime-500/10 text-lime-500'>
            <Leaf size={24} />
          </div>
          <div>
            <h2
              className={`text-xl font-display transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              MiaSys
            </h2>
            <p className='text-[10px] tracking-[0.2em] font-bold text-lime-500 uppercase'>
              Botanical Engineering
            </p>
            <p className='text-[9px] text-zinc-500 font-bold'>v 0.1.0</p>
          </div>
        </div>

        <nav className='flex-1 space-y-2'>
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl border border-transparent transition-all text-xs font-bold uppercase tracking-widest ${
                item.active
                  ? 'sidebar-active shadow-[0_0_15px_rgba(166,226,46,0.1)]'
                  : `hover:bg-zinc-500/5 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer Plant Branding */}
        <div className='mt-auto space-y-6'>
          <div
            className={`p-6 rounded-3xl relative overflow-hidden transition-all ${isDark ? 'glass-panel glass-panel-dark' : 'glass-panel glass-panel-light'}`}
          >
            <div className='absolute -right-4 -bottom-4 opacity-20 transform rotate-12'>
              <Leaf size={100} className='text-lime-500' />
            </div>
            <div className='relative z-10 space-y-2'>
              <p className='font-display italic text-lg leading-tight'>
                &quot;Organic by logic. Engineered for life.&quot;
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 p-3 rounded-2xl border transition-colors ${isDark ? 'bg-zinc-950/50 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}
          >
            <div className='w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden'>
              <Image
                src={WednesdayImage}
                alt='Profile'
                className='w-full h-full object-cover'
                width={40}
                height={40}
              />
            </div>
            <div className='flex-1'>
              <p
                className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Dr. Elara Voss
              </p>
              <p className='text-[9px] text-zinc-500'>Lead Botanist</p>
            </div>
            <ChevronDown size={14} className='text-zinc-600' />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className='flex-1 flex flex-col h-screen overflow-y-auto'>
        {/* Top Header / Nav */}
        <header
          className={`sticky top-0 z-50 backdrop-blur-md border-b px-12 py-6 flex items-center justify-between transition-colors ${isDark ? 'bg-[#050505]/80 border-zinc-800' : 'bg-white/80 border-slate-200 shadow-sm'}`}
        >
          <div className='flex items-center gap-10'>
            {['Design System', 'Guides', 'Articles', 'Updates'].map((link) => (
              <a
                key={link}
                href='#'
                className={`text-xs font-bold uppercase tracking-[0.2em] relative transition-colors ${link === 'Articles' ? 'text-lime-500' : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {link}
                {link === 'Articles' && (
                  <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-500' />
                )}
              </a>
            ))}
          </div>
          <div className='flex items-center gap-6'>
            <div className={`relative hidden md:block`}>
              <Search
                size={16}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500'
              />
              <input
                type='text'
                placeholder='Search...'
                className={`pl-11 pr-10 py-2 rounded-full border text-xs focus:outline-none focus:border-lime-500 transition-all w-64 ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40 text-[9px] font-black'>
                <Command size={10} /> K
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-400' : 'border-slate-200 bg-white text-slate-600'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className='flex-1 flex justify-center py-20 px-12'>
          <article className='max-w-4xl w-full flex flex-col lg:flex-row gap-20'>
            {/* Left Content Column */}
            <div className='flex-1 space-y-20'>
              {/* Meta & Title */}
              <div className='space-y-10'>
                <nav className='flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500'>
                  <span>Home</span> <span className='opacity-30'>/</span>
                  <span>Articles</span> <span className='opacity-30'>/</span>
                  <span className='text-lime-500'>Design Philosophy</span>
                </nav>

                <div className='space-y-6'>
                  <span className='inline-block px-3 py-1 rounded-full border border-lime-500/30 text-lime-500 text-[10px] font-black uppercase tracking-widest bg-lime-500/5'>
                    Design Philosophy
                  </span>
                  <h1
                    className={`text-6xl md:text-7xl font-display leading-[1.1] transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Designing with Nature, Building for Life.
                  </h1>
                  <p
                    className={`text-xl leading-relaxed font-light max-w-2xl transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                  >
                    At MiaSys, we believe software should feel grown and living.
                    Our design philosophy merges botanical intelligence with
                    engineered precision to create digital experiences that
                    breathe.
                  </p>
                </div>

                <div className='flex items-center gap-8 pt-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full overflow-hidden bg-zinc-800'>
                      <Image
                        src={WednesdayImage}
                        alt='Profile'
                        className='w-full h-full object-cover'
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}
                      >
                        By Dr. Elara Voss
                      </p>
                      <p className='text-[10px] text-zinc-500'>Lead Botanist</p>
                    </div>
                  </div>
                  <div
                    className={`w-[1px] h-10 ${isDark ? 'bg-zinc-800' : 'bg-slate-200'}`}
                  />
                  <div>
                    <p
                      className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      May 24, 2024
                    </p>
                    <p className='text-[10px] text-zinc-500'>8 min read</p>
                  </div>
                </div>
              </div>

              {/* Glassmorphic Callout */}
              <div
                className={`p-10 rounded-[40px] relative overflow-hidden transition-all ${isDark ? 'glass-panel glass-panel-dark' : 'glass-panel glass-panel-light shadow-xl'}`}
              >
                <div className='absolute right-0 top-0 w-32 h-32 bg-lime-500/10 blur-[60px] rounded-full' />
                <div className='flex items-start gap-8 relative z-10'>
                  <div className='p-4 rounded-2xl bg-lime-500/10 text-lime-500 shrink-0'>
                    <Leaf size={32} />
                  </div>
                  <p
                    className={`text-3xl font-display leading-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    We don&apos;t just design interfaces. We{' '}
                    <span className='text-lime-500 italic'>cultivate</span>{' '}
                    experiences.
                  </p>
                </div>
              </div>

              {/* Main Text Content */}
              <div className='space-y-16'>
                <section className='space-y-8'>
                  <h2
                    className={`text-4xl font-display transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    The Philosophy of Organic Logic
                  </h2>
                  <p
                    className={`text-lg leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                  >
                    MiaSys is built on the principle of Organic Logic — the
                    belief that systems should mimic nature&apos;s intelligence:
                    adaptive, efficient, and in harmony with its environment.
                    Our approach blends three core ideals:
                  </p>

                  <div className='space-y-12 pt-8'>
                    {[
                      {
                        icon: Leaf,
                        title: 'Grown, Not Made',
                        desc: 'Elements bloom into view through intentional motion and transforms, creating a sense of natural evolution.',
                      },
                      {
                        icon: Circle,
                        title: 'Breathe',
                        desc: 'Through spacing, depth, and pacing, we give content room to exist and users room to think.',
                      },
                      {
                        icon: Settings,
                        title: 'In Harmony',
                        desc: 'Every component works as part of a living system, adapting across contexts and devices.',
                      },
                    ].map((feat, idx) => (
                      <div key={idx} className='flex gap-8 group'>
                        <div
                          className={`p-5 rounded-2xl border transition-all group-hover:scale-110 ${isDark ? 'bg-zinc-900 border-zinc-800 text-lime-500' : 'bg-white border-slate-200 text-lime-600 shadow-sm'}`}
                        >
                          <feat.icon size={28} />
                        </div>
                        <div className='space-y-2'>
                          <h4
                            className={`text-xl font-display transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                          >
                            {feat.title}
                          </h4>
                          <p
                            className={`leading-relaxed transition-colors ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}
                          >
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className='space-y-8'>
                  <h2
                    className={`text-4xl font-display transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Nature as a System
                  </h2>
                  <p
                    className={`text-lg leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                  >
                    Nature is our greatest engineer. From fractals to foliage,
                    every pattern serves a purpose. MiaSys translates these
                    patterns into a design language that is both beautiful and
                    functional.
                  </p>

                  <div
                    className={`p-1 rounded-[32px] group cursor-pointer overflow-hidden relative transition-all ${isDark ? 'glass-panel glass-panel-dark' : 'glass-panel glass-panel-light shadow-lg'}`}
                  >
                    <div className='flex items-center gap-8 p-10'>
                      <div className='w-24 h-24 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 group-hover:scale-105 transition-transform'>
                        <Image
                          src={PriscillaImage}
                          alt='System'
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1'>
                        <p
                          className={`text-2xl font-display leading-tight mb-1 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          Biomimicry drives clarity. Clarity drives{' '}
                          <span className='text-lime-500'>trust.</span>
                        </p>
                        <p className='text-xs text-zinc-500 font-bold uppercase tracking-widest'>
                          Read about system ethics
                        </p>
                      </div>
                      <div
                        className={`p-4 rounded-full border transition-all group-hover:bg-lime-500 group-hover:text-black ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
                      >
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Footer Pager */}
              <div
                className={`pt-20 border-t flex items-center justify-between transition-colors ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
              >
                <div className='group cursor-pointer'>
                  <p className='text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2'>
                    Previous Article
                  </p>
                  <div className='flex items-center gap-4'>
                    <div
                      className={`p-3 rounded-full border transition-all group-hover:bg-zinc-800 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
                    >
                      <ArrowLeft size={16} />
                    </div>
                    <p
                      className={`text-sm font-bold transition-colors ${isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}`}
                    >
                      The Power of Atmosphere
                    </p>
                  </div>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}
                >
                  <Leaf size={18} className='text-lime-500' />
                </div>
                <div className='group cursor-pointer text-right'>
                  <p className='text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2'>
                    Next Article
                  </p>
                  <div className='flex items-center gap-4 justify-end'>
                    <p
                      className={`text-sm font-bold transition-colors ${isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}`}
                    >
                      Building Adaptive Components
                    </p>
                    <div
                      className={`p-3 rounded-full border transition-all group-hover:bg-zinc-800 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <aside className='w-80 space-y-12'>
              {/* Hero Botanical Visual */}
              <div className='relative animate-float'>
                <div
                  className={`absolute inset-0 blur-[80px] rounded-full opacity-20 ${isDark ? 'bg-lime-500' : 'bg-lime-300'}`}
                />
                <div className='relative p-6'>
                  <svg viewBox='0 0 200 300' className='w-full h-auto'>
                    <path
                      d='M100,300 Q90,150 110,40'
                      stroke={isDark ? '#4ade80' : '#166534'}
                      strokeWidth='1.5'
                      fill='none'
                      opacity='0.6'
                    />
                    <g fill={isDark ? '#4ade80' : '#166534'}>
                      <ellipse
                        cx='95'
                        cy='220'
                        rx='10'
                        ry='25'
                        transform='rotate(-35 95 220)'
                        opacity='0.4'
                      />
                      <ellipse
                        cx='115'
                        cy='160'
                        rx='8'
                        ry='20'
                        transform='rotate(25 115 160)'
                        opacity='0.3'
                      />
                      <ellipse
                        cx='98'
                        cy='90'
                        rx='12'
                        ry='30'
                        transform='rotate(-45 98 90)'
                        opacity='0.5'
                      />
                    </g>
                    <circle
                      cx='110'
                      cy='40'
                      r='3'
                      fill='#A6E22E'
                      className='animate-pulse'
                    />
                  </svg>
                </div>
              </div>

              {/* Anchor Links */}
              <div className='space-y-6'>
                <p className='text-[10px] font-black uppercase tracking-widest text-zinc-500'>
                  On This Page
                </p>
                <ul className='space-y-4 text-xs font-bold transition-colors'>
                  <li className='text-lime-500 flex items-center gap-3'>
                    <div className='w-[2px] h-3 bg-lime-500' />
                    The Philosophy of Organic Logic
                  </li>
                  {[
                    'Nature as a System',
                    'Designing with Intention',
                    'The MiaSys Difference',
                    "What's Next",
                  ].map((link) => (
                    <li
                      key={link}
                      className={`pl-3 transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-900'} cursor-pointer`}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className='space-y-6'>
                <p className='text-[10px] font-black uppercase tracking-widest text-zinc-500'>
                  Related Articles
                </p>
                <div className='space-y-4'>
                  {[
                    {
                      title: 'The Botanical Cut',
                      desc: 'Asymmetric design harmony.',
                      img: EvaImage,
                    },
                    {
                      title: 'Color as Energy',
                      desc: 'Understanding botanical energy.',
                      img: MagaliImage,
                    },
                    {
                      title: 'Motion, Naturally',
                      desc: 'Crafting transitions that feel alive.',
                      img: MarthaImage,
                    },
                  ].map((art) => (
                    <div
                      key={art.title}
                      className='flex gap-4 group cursor-pointer'
                    >
                      <div className='w-16 h-16 rounded-xl bg-zinc-800 overflow-hidden shrink-0 border border-white/5 transition-transform group-hover:scale-105'>
                        <Image
                          src={art.img}
                          alt={art.title}
                          className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all'
                          width={64}
                          height={64}
                        />
                      </div>
                      <div>
                        <h6
                          className={`text-[11px] font-bold transition-colors ${isDark ? 'text-zinc-300 group-hover:text-lime-500' : 'text-slate-700 group-hover:text-lime-600'}`}
                        >
                          {art.title}
                        </h6>
                        <p className='text-[9px] text-zinc-500 leading-tight mt-1'>
                          {art.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Callout */}
              <div
                className={`p-8 rounded-[32px] space-y-6 transition-all ${isDark ? 'glass-panel glass-panel-dark' : 'glass-panel glass-panel-light shadow-sm'}`}
              >
                <div className='p-3 rounded-xl bg-lime-500/10 text-lime-500 inline-block'>
                  <Sprout size={20} />
                </div>
                <div className='space-y-2'>
                  <h5
                    className={`text-lg font-display ${isDark ? 'text-white' : 'text-slate-900'}`}
                  >
                    Have thoughts to share?
                  </h5>
                  <p className='text-xs text-zinc-500'>
                    Join the conversation in our community forum.
                  </p>
                </div>
                <button
                  className={`w-full py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${isDark ? 'border-zinc-800 text-zinc-400 hover:bg-zinc-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'}`}
                >
                  Visit Community <ArrowUpRight size={14} />
                </button>
              </div>
            </aside>
          </article>
        </div>

        {/* Global Footer (Subtle) */}
        <footer
          className={`py-12 px-12 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${isDark ? 'border-zinc-800 opacity-40' : 'border-slate-200'}`}
        >
          <div className='flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold'>
            <Leaf size={14} className='text-lime-500' />
            Organic by logic.{' '}
            <span className='text-lime-500'>Engineered for life.</span>
          </div>
          <p className='text-[9px] uppercase tracking-widest text-zinc-500'>
            © 2026 MIASYS BOTANICAL EDITORIAL SYSTEMS
          </p>
        </footer>
      </main>
    </div>
  );
}
