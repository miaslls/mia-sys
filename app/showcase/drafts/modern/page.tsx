'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Palette,
  Type,
  Layout,
  Menu,
  Sun,
  Moon,
  Leaf,
  MoveRight,
  Maximize2,
  MousePointer2,
  AlertCircle,
  CheckCircle2,
  Info,
  Shapes,
  Wind,
  Sparkles,
  Zap,
  Search,
  Settings,
  Bell,
  Heart,
  SquareStack,
  Brush,
  Smartphone,
  Monitor,
  Layers,
  Fingerprint,
  RotateCcw,
  Plus,
  Trash,
  Download,
  Share,
  Mail,
  Phone,
  MapPin,
  User,
  Image,
  FileText,
  Cloud,
  Activity,
  Database,
  Columns,
  MessageSquare,
  Lock,
  Unlock,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Flag,
  Home,
  Star,
  Trash2,
  Clock,
  Calendar,
  Camera,
  Play,
  Pause,
  Wifi,
  Battery,
  HardDrive,
  Cpu,
  Globe,
  Key,
  RefreshCw,
  Send,
  Users,
  MessageCircle,
  AtSign,
  Link,
  Gift,
  Smile,
  Languages,
  Hash,
  Megaphone,
  Radio,
  Shield,
  ShieldCheck,
  Terminal,
  Power,
  Bluetooth,
  Map,
  Sprout,
  Trees,
  TreePine,
  Droplets,
  Flame,
  Mountain,
  Waves,
  Bird,
  Bug,
  Ghost,
  BarChart3,
  PieChart,
  Table,
  FileJson,
  Folder,
  Archive,
  Grid,
  List,
  Box,
  Compass,
} from 'lucide-react';

// --- DESIGN TOKENS ---
const tokens = {
  colors: {
    brand: {
      amber: '#FFCA3A',
      rose: '#FF595E',
      azure: '#1982C4',
      lime: '#8AC926',
    },
    states: {
      positive: '#8AC926',
      warning: '#FFCA3A',
      danger: '#FF595E',
      info: '#1982C4',
    },
    ambient: {
      light: { nav: '#EDEBE3', content: '#F7F3F3', border: '#CED6DF' },
      dark: {
        nav: '#0B0E14',
        content: '#0B0E14',
        surface: '#141A24',
        border: '#232D3D',
      },
    },
  },
  typography: {
    families: {
      display: 'font-serif',
      body: 'font-sans',
    },
  },
  spacing: [
    { name: '4xs', value: '2px' },
    { name: 'xs', value: '4px' },
    { name: 'sm', value: '8px' },
    { name: 'md', value: '16px' },
    { name: 'lg', value: '24px' },
    { name: 'xl', value: '32px' },
    { name: '2xl', value: '48px' },
    { name: '3xl', value: '64px' },
  ],
  radius: 'rounded-[2rem] rounded-tr-md rounded-bl-md',
};

// --- QUIRKY SVG ACCENTS ---
const Squiggle = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 100 20'
    className={className}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 10C10 10 15 2 25 2C35 2 40 18 50 18C60 18 65 2 75 2C85 2 90 10 100 10'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

const Blob = ({
  className,
  color = 'currentColor',
  variant = 'A',
}: {
  className?: string;
  color?: string;
  variant?: 'A' | 'B' | 'C';
}) => {
  const paths: Record<'A' | 'B' | 'C', string> = {
    A: 'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.6,41.9C63.8,54.7,51.7,65.7,37.8,72.3C23.9,78.9,8.1,81.1,-7.2,78.5C-22.5,75.9,-37.2,68.5,-49.6,58.3C-62,48.1,-72.1,35.1,-78.3,20.3C-84.5,5.5,-86.8,-11.1,-82.1,-25.9C-77.4,-40.7,-65.7,-53.8,-51.9,-61.3C-38.1,-68.8,-22.1,-70.7,-6.3,-72.8C9.5,-74.9,23,-77.2,44.7,-76.4Z',
    B: 'M38.1,-65.6C51.6,-57.8,66.4,-49.7,73.5,-37.2C80.5,-24.8,79.8,-7.9,76.5,8.2C73.3,24.3,67.6,39.6,57.1,51.1C46.6,62.6,31.4,70.3,16.2,72.2C1.1,74,-13.9,70,-28.9,64.3C-43.9,58.5,-58.9,50.9,-67.2,38.8C-75.6,26.7,-77.2,10,-75.2,-5.7C-73.2,-21.4,-67.6,-36.1,-57.4,-46.8C-47.3,-57.4,-32.6,-64,-18.2,-68.2C-3.8,-72.4,10.2,-74.2,38.1,-65.6Z',
    C: 'M52.4,-84.9C66,-75.8,73.7,-58.1,78.2,-41C82.7,-23.9,84.1,-7.4,82,8.6C79.8,24.6,74.2,40.1,64,52.2C53.7,64.2,38.8,72.9,23.5,77.7C8.1,82.4,-7.8,83.1,-22.8,79.1C-37.8,75,-51.9,66.2,-63.3,54.5C-74.8,42.7,-83.7,28.1,-87.1,12C-90.5,-4.1,-88.4,-21.7,-81.4,-36.8C-74.4,-51.9,-62.5,-64.6,-48.4,-73.4C-34.4,-82.1,-18.2,-87,-0.5,-86.2C17.2,-85.4,38.8,-94.1,52.4,-84.9Z',
  };
  return (
    <svg
      viewBox='0 0 200 200'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={color}
        d={paths[variant] || paths.A}
        transform='translate(100 100)'
      />
    </svg>
  );
};

// --- SUB-COMPONENTS ---

const SectionHeader = ({
  title,
  sub,
  isDarkMode,
  hexColor = '#FF595E',
  blobVariant = 'A',
}: {
  title: string;
  sub: string;
  isDarkMode: boolean;
  hexColor?: string;
  blobVariant?: 'A' | 'B' | 'C';
}) => (
  <header className='relative mb-24 text-center flex flex-col items-center'>
    <Blob
      className={`absolute -top-32 w-[36rem] h-[32rem] opacity-15 dark:opacity-5 transition-all duration-1000`}
      color={hexColor}
      variant={blobVariant}
    />
    <div className='relative z-10 flex flex-col items-center'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='w-2 h-2 rounded-full bg-rose-500 animate-pulse' />
        <div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-75' />
        <div className='w-2 h-2 rounded-full bg-lime-500 animate-pulse delay-150' />
      </div>
      <h2
        className={`font-serif text-7xl md:text-9xl tracking-tighter transition-colors mb-8 ${isDarkMode ? 'text-white' : 'text-[#0B0E14]'}`}
      >
        {title}
      </h2>
      <p
        className={`text-2xl font-medium max-w-3xl leading-relaxed text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}
      >
        {sub}
      </p>
    </div>
  </header>
);

const ColorCard = ({
  name,
  hex,
  isDarkMode,
  desc,
}: {
  name: string;
  hex: string;
  isDarkMode: boolean;
  desc: string;
}) => (
  <div
    className={`p-4 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100'} ${tokens.radius} shadow-sm group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
  >
    <div
      className={`h-32 w-full mb-4 shadow-inner border border-black/5 ${tokens.radius}`}
      style={{ backgroundColor: hex }}
    />
    <div className='flex justify-between items-center mb-1'>
      <h4 className='font-bold text-sm dark:text-white uppercase'>{name}</h4>
      <code className='text-[10px] text-rose-500 font-mono font-black'>
        {hex}
      </code>
    </div>
    <p className='text-[11px] text-zinc-400 leading-tight'>{desc}</p>
  </div>
);

// --- MAIN APP ---

export default function ModernDraftPage() {
  const [activeTab, setActiveTab] = useState('manifesto');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [strokeWidth, setStrokeWidth] = useState(2.5);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0B0E14' : '#F7F3F3';
  }, [isDarkMode]);

  const allIcons = useMemo(() => {
    return Object.entries(iconLibrary).flatMap(([cat, icons]) =>
      icons.map((i) => ({ ...i, category: cat })),
    );
  }, []);

  const filteredIcons = allIcons.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const navItems = [
    {
      id: 'manifesto',
      label: 'Manifesto',
      icon: Compass,
      color: tokens.colors.brand.lime,
    },
    {
      id: 'foundations',
      label: 'Foundations',
      icon: Palette,
      color: tokens.colors.brand.rose,
    },
    {
      id: 'architecture',
      label: 'Architecture',
      icon: Layout,
      color: tokens.colors.brand.amber,
    },
    {
      id: 'components',
      label: 'Components',
      icon: Box,
      color: tokens.colors.brand.azure,
    },
    {
      id: 'icons',
      label: 'Icons',
      icon: Shapes,
      color: tokens.colors.brand.lime,
    },
    {
      id: 'signature',
      label: 'Signature',
      icon: Brush,
      color: tokens.colors.brand.rose,
    },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen font-sans transition-colors duration-700 ${isDarkMode ? 'bg-[#0B0E14] text-white' : 'bg-[#F7F3F3] text-zinc-900'}`}
      >
        {/* MODERN TOP NAVIGATION */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-2xl ${
            isDarkMode
              ? 'bg-[#0B0E14]/80 border-[#232D3D]'
              : 'bg-white/80 border-zinc-200 shadow-sm'
          }`}
        >
          <div className='max-w-[1400px] mx-auto px-10 h-24 flex items-center justify-between'>
            <div
              className='flex items-center gap-3 group cursor-pointer'
              onClick={() => setActiveTab('manifesto')}
            >
              <div className='w-12 h-12 bg-[#FFCA3A] rounded-2xl rotate-3 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110'>
                <Leaf size={24} strokeWidth={2.5} className='text-[#0B0E14]' />
              </div>
              <h1 className='font-serif text-4xl tracking-tighter text-[#0B0E14] dark:text-white'>
                MiaSys.
              </h1>
            </div>

            {/* Horizontal Links */}
            <div className='hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#141A24] border border-zinc-200/50 dark:border-[#232D3D]'>
              {navItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-[#0B0E14] text-[#FFCA3A] shadow-lg'
                        : 'bg-white text-rose-500 shadow-md'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-slate-200'
                  }`}
                >
                  <tab.icon
                    size={14}
                    className={activeTab === tab.id ? 'rotate-12' : ''}
                  />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className='flex items-center gap-6'>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
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

        {/* Content */}
        <main className='min-h-screen px-6 md:px-12 lg:px-24 transition-all duration-500 pt-48 pb-64'>
          <div className='max-w-[1200px] mx-auto'>
            {/* MANIFESTO TAB */}
            {activeTab === 'manifesto' && (
              <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
                <SectionHeader
                  title='Manifesto.'
                  sub='MiaSys is a design language inspired by the persistence of growth. We reject sterile geometry in favor of botanical logic.'
                  hexColor={tokens.colors.brand.lime}
                  blobVariant='A'
                  isDarkMode={isDarkMode}
                />

                <div className='grid lg:grid-cols-12 gap-16 items-center'>
                  <div
                    className={`lg:col-span-7 p-20 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-2xl'} ${tokens.radius} relative overflow-hidden group`}
                  >
                    <div className='absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all duration-1000 group-hover:rotate-45'>
                      <Wind size={160} strokeWidth={0.5} />
                    </div>
                    <h3 className='font-serif text-6xl mb-10 relative z-10 dark:text-white'>
                      Organic Logic.
                    </h3>
                    <p
                      className={`text-2xl leading-relaxed italic relative z-10 ${isDarkMode ? 'text-slate-400' : 'text-zinc-500'}`}
                    >
                      &quot;MiaSys utilizes the &apos;Botanical Cut&apos;—a
                      mathematical asymmetry that provides digital comfort
                      through irregular curves and human-centered strokes.&quot;
                    </p>
                    <Squiggle className='w-48 text-amber-500 mt-16' />
                  </div>
                  <div className='lg:col-span-5 flex flex-col items-center gap-16'>
                    {/* RESTORED: Living Geometry replacing blinking pulse */}
                    <div className='relative w-80 h-80 flex items-center justify-center group'>
                      <div
                        className={`absolute w-72 h-72 bg-[#8AC926]/10 border border-[#8AC926]/20 transition-all duration-1000 group-hover:rotate-45`}
                        style={{ borderRadius: '6rem 0.75rem 6rem 0.75rem' }}
                      />
                      <div
                        className={`absolute w-64 h-64 bg-[#FF595E]/10 border border-[#FF595E]/20 transition-all duration-700 group-hover:-rotate-12`}
                        style={{ borderRadius: '4rem 0.5rem 4rem 0.5rem' }}
                      />
                      <div
                        className={`relative w-56 h-56 bg-[#FFCA3A] flex items-center justify-center shadow-[0_40px_100px_rgba(255,202,58,0.2)] transition-all duration-500 group-hover:scale-105`}
                        style={{ borderRadius: '5rem 0.75rem 5rem 0.75rem' }}
                      >
                        <Sparkles
                          size={110}
                          strokeWidth={2.5}
                          className='text-[#0B0E14] transition-transform group-hover:rotate-12'
                        />
                      </div>
                      {/* Static brand markers */}
                      <div className='absolute top-0 right-10 w-3 h-3 rounded-full bg-rose-500' />
                      <div className='absolute bottom-10 left-0 w-2 h-2 rounded-full bg-azure-500' />
                    </div>

                    <div className='flex gap-6'>
                      <div className='px-8 py-4 rounded-full bg-zinc-100 dark:bg-[#141A24] text-xs font-black uppercase tracking-widest border border-zinc-200 dark:border-zinc-800'>
                        Build 1.5.2
                      </div>
                      <div className='px-8 py-4 rounded-full bg-lime-500/10 text-lime-500 text-xs font-black uppercase tracking-widest border border-lime-500/20 shadow-lg shadow-lime-500/5'>
                        Production
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FOUNDATIONS TAB */}
            {activeTab === 'foundations' && (
              <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
                <SectionHeader
                  title='Foundations.'
                  sub='The technical DNA that stabilizes the visual environment.'
                  hexColor={tokens.colors.brand.rose}
                  blobVariant='B'
                  isDarkMode={isDarkMode}
                />

                <section className='space-y-16'>
                  <div className='flex items-end justify-between border-b border-zinc-200 dark:border-[#232D3D] pb-10'>
                    <h3 className='text-xs font-black uppercase text-rose-500 tracking-[0.4em]'>
                      Pigment Standards
                    </h3>
                    <p className='text-sm font-mono text-zinc-400'>
                      Locked Tones: 04
                    </p>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <ColorCard
                      name='Amber'
                      hex='#FFCA3A'
                      desc='Primary anchor for user focus and brand presence.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Rose'
                      hex='#FF595E'
                      desc='State signaling for alerts and primary highlights.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Lime'
                      hex='#8AC926'
                      desc='Success confirmation and organic progress.'
                      isDarkMode={isDarkMode}
                    />
                    <ColorCard
                      name='Azure'
                      hex='#1982C4'
                      desc='Supportive structural depth and safe navigation.'
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </section>
              </div>
            )}

            {/* ARCHITECTURE TAB */}
            {activeTab === 'architecture' && (
              <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
                <SectionHeader
                  title='Architecture.'
                  sub='The mathematical grid and responsive rules that hold the garden together.'
                  hexColor={tokens.colors.brand.amber}
                  blobVariant='C'
                  isDarkMode={isDarkMode}
                />

                <div className='grid lg:grid-cols-2 gap-16'>
                  <div
                    className={`p-12 lg:p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius}`}
                  >
                    <div className='flex items-center gap-4 mb-12'>
                      <div className='w-1.5 h-8 bg-amber-500 rounded-full' />
                      <h4 className='font-serif text-4xl dark:text-white'>
                        The 8pt Grid.
                      </h4>
                    </div>
                    <div className='space-y-10'>
                      {tokens.spacing.map((s, i) => (
                        <div key={i} className='flex items-center gap-10 group'>
                          <span className='w-12 font-mono text-[10px] text-zinc-400 uppercase font-black tracking-widest'>
                            {s.name}
                          </span>
                          <div
                            className='flex-grow h-6 bg-amber-500/10 border-x-2 border-amber-500 transition-all group-hover:bg-amber-500/30'
                            style={{ width: s.value }}
                          />
                          <span className='w-20 text-right font-mono text-sm text-zinc-500'>
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-12 lg:p-16 border flex flex-col ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius}`}
                  >
                    <div className='flex flex-col items-center justify-center mb-12'>
                      <div className='w-24 h-24 bg-zinc-50 dark:bg-black/40 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-zinc-200/50 dark:border-white/5'>
                        <Monitor className='text-amber-500' size={48} />
                      </div>
                      <h4 className='font-serif text-4xl dark:text-white text-center italic'>
                        Fluid Points
                      </h4>
                    </div>
                    <div className='w-full space-y-6'>
                      {[
                        { t: 'sm', w: '640px', c: 'Mobile Landscape' },
                        { t: 'md', w: '768px', c: 'Tablets (Vertical)' },
                        { t: 'lg', w: '1024px', c: 'Laptops / Desktop' },
                        { t: 'xl', w: '1280px', c: 'Widescreen' },
                      ].map((b) => (
                        <div
                          key={b.t}
                          className='flex items-center justify-between p-5 bg-zinc-50 dark:bg-black/20 rounded-2xl border border-zinc-100 dark:border-white/5 transition-all hover:scale-[1.02] group'
                        >
                          <div className='flex items-center gap-4'>
                            <span className='text-sm font-black uppercase text-amber-500 group-hover:scale-110 transition-transform'>
                              {b.t}
                            </span>
                            <span className='text-xs text-zinc-400 uppercase tracking-widest'>
                              {b.c}
                            </span>
                          </div>
                          <span className='font-mono text-sm dark:text-slate-400'>
                            {b.w}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COMPONENTS TAB */}
            {activeTab === 'components' && (
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
                      <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>
                        Action Drivers
                      </h4>
                    </div>
                    <div
                      className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius} flex flex-col gap-12`}
                    >
                      <div className='space-y-6'>
                        <p className='text-[10px] font-bold text-zinc-400 uppercase tracking-widest'>
                          Button Variants
                        </p>
                        <div className='flex flex-wrap gap-4'>
                          <button
                            className={`px-8 py-4 bg-[#FFCA3A] text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-500/10 ${tokens.radius}`}
                          >
                            Primary
                          </button>
                          <button
                            className={`px-8 py-4 border-2 border-zinc-200 dark:border-zinc-700 font-black text-xs uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all dark:text-white ${tokens.radius}`}
                          >
                            Ghost
                          </button>
                          <button
                            className={`px-8 py-4 bg-[#FF595E] text-white font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-rose-500/10 ${tokens.radius}`}
                          >
                            Danger
                          </button>
                        </div>
                      </div>
                      <div className='space-y-6'>
                        <p className='text-[10px] font-bold text-zinc-400 uppercase tracking-widest'>
                          Iconic Buttons
                        </p>
                        <div className='flex gap-4'>
                          <button
                            className={`w-14 h-14 bg-[#1982C4] text-white flex items-center justify-center hover:rotate-12 transition-all shadow-xl shadow-blue-500/20 ${tokens.radius}`}
                          >
                            <Plus size={24} strokeWidth={2.5} />
                          </button>
                          <button
                            className={`w-14 h-14 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all dark:text-white ${tokens.radius}`}
                          >
                            <Share size={24} strokeWidth={2} />
                          </button>
                          <button
                            className={`w-14 h-14 bg-[#8AC926] text-white flex items-center justify-center hover:rotate-[-12deg] transition-all shadow-xl shadow-lime-500/20 ${tokens.radius}`}
                          >
                            <CheckCircle2 size={24} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className='space-y-10'>
                    <div className='flex items-center gap-4'>
                      <div className='w-1.5 h-6 bg-rose-500 rounded-full' />
                      <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>
                        Entry Fields
                      </h4>
                    </div>
                    <div
                      className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius} space-y-10`}
                    >
                      <div className='space-y-3'>
                        <label className='text-[10px] font-black uppercase text-amber-500 tracking-widest ml-1'>
                          Active Interaction
                        </label>
                        <div className='w-full border-2 border-amber-500 p-4 rounded-2xl bg-white dark:bg-[#0B0E14] flex items-center gap-4 shadow-2xl shadow-amber-500/10'>
                          <Type size={20} className='text-amber-500' />
                          <input
                            className='bg-transparent border-none outline-none w-full text-base font-medium dark:text-white'
                            defaultValue='MiaSys Input Session'
                          />
                        </div>
                        <p className='text-[10px] text-zinc-400 italic px-1'>
                          Micro-copy: System utilizes high-contrast focus rings.
                        </p>
                      </div>
                      <div className='space-y-3'>
                        <div className='w-full border-2 border-[#FF595E]/50 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-900/10 flex items-center gap-4'>
                          <AlertCircle size={20} className='text-rose-500' />
                          <input
                            className='bg-transparent border-none outline-none w-full text-base font-medium text-rose-500'
                            defaultValue='Invalid Signature'
                          />
                        </div>
                        <p className='text-[10px] text-rose-500 font-bold px-1 uppercase tracking-tighter'>
                          Identity validation failed.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className='space-y-10 lg:col-span-2'>
                    <div className='flex items-center gap-4'>
                      <div className='w-1.5 h-6 bg-lime-500 rounded-full' />
                      <h4 className='text-xs font-black uppercase text-zinc-400 tracking-[0.3em]'>
                        Feedback Systems
                      </h4>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                      {[
                        {
                          title: 'New Growth',
                          sub: 'System updated successfully.',
                          color: 'bg-lime-500',
                          icon: Sparkles,
                        },
                        {
                          title: 'Critical Halt',
                          sub: 'Action required immediately.',
                          color: 'bg-rose-500',
                          icon: AlertCircle,
                        },
                        {
                          title: 'Pending Sync',
                          sub: 'Connecting to Mia Discovery.',
                          color: 'bg-amber-500',
                          icon: RotateCcw,
                        },
                      ].map((alert, i) => (
                        <div
                          key={i}
                          className={`p-8 ${isDarkMode ? 'bg-[#141A24]' : 'bg-white shadow-xl'} border border-zinc-100 dark:border-[#232D3D] ${tokens.radius} flex items-center gap-6 group`}
                        >
                          <div
                            className={`w-14 h-14 ${alert.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12`}
                          >
                            <alert.icon size={28} strokeWidth={2.5} />
                          </div>
                          <div>
                            <h5
                              className={`font-black text-sm dark:text-white uppercase tracking-tighter`}
                            >
                              {alert.title}
                            </h5>
                            <p className='text-xs text-zinc-400'>{alert.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* ICON LIBRARY TAB */}
            {activeTab === 'icons' && (
              <div className='space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
                <SectionHeader
                  title='Icons.'
                  sub='Discovery engine for 100 system tokens. Click any tile to copy name.'
                  hexColor={tokens.colors.brand.lime}
                  blobVariant='B'
                  isDarkMode={isDarkMode}
                />

                <div
                  className={`sticky top-32 z-40 p-8 border backdrop-blur-3xl rounded-[4rem] ${
                    isDarkMode
                      ? 'bg-[#141A24]/90 border-[#232D3D]'
                      : 'bg-white/90 border-zinc-100 shadow-2xl'
                  } flex flex-col md:flex-row gap-8 items-center`}
                >
                  <div className='flex-grow flex items-center gap-6 px-8 py-5 bg-zinc-100 dark:bg-black/30 rounded-3xl w-full border border-zinc-200/50 dark:border-white/5'>
                    <Search size={24} className='text-zinc-400' />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='Filter 100+ tokens...'
                      className='bg-transparent border-none outline-none text-xl w-full font-medium dark:text-white'
                    />
                  </div>
                  <div className='flex items-center p-2 border border-zinc-200 dark:border-[#232D3D] rounded-2xl bg-white dark:bg-[#0B0E14] shadow-inner'>
                    {[1.5, 2.5].map((w) => (
                      <button
                        key={w}
                        onClick={() => setStrokeWidth(w)}
                        className={`px-10 py-4 text-xs font-black uppercase rounded-xl transition-all ${strokeWidth === w ? 'bg-amber-500 text-black shadow-xl scale-105' : 'text-zinc-400 hover:text-zinc-600'}`}
                      >
                        {w === 1.5 ? 'Utility' : 'Brand'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8'>
                  {filteredIcons.map((i, idx) => (
                    <button
                      key={idx}
                      className={`group p-8 border transition-all duration-500 ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-sm hover:shadow-2xl hover:border-amber-500'} ${tokens.radius} flex flex-col items-center gap-6 hover:-translate-y-3`}
                    >
                      <div
                        className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${isDarkMode ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-50 text-zinc-400'} group-hover:rotate-12 group-hover:scale-125 shadow-inner`}
                      >
                        {React.createElement(i.icon, {
                          size: 32,
                          strokeWidth: strokeWidth,
                          className: 'group-hover:text-amber-500',
                        })}
                      </div>
                      <span className='text-[10px] font-black uppercase text-zinc-400 tracking-tighter truncate w-full text-center'>
                        {i.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIGNATURE TAB */}
            {activeTab === 'signature' && (
              <div className='space-y-40 animate-in fade-in slide-in-from-bottom-12 duration-1000'>
                <SectionHeader
                  title='Signature.'
                  sub='The non-functional soul of the system. Flourishes that ground the digital garden.'
                  hexColor={tokens.colors.brand.rose}
                  blobVariant='C'
                  isDarkMode={isDarkMode}
                />
                <div className='grid md:grid-cols-2 gap-12'>
                  <div
                    className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius} overflow-hidden relative group`}
                  >
                    <div
                      className='absolute inset-0 opacity-[0.05] pointer-events-none transition-all group-hover:opacity-[0.08]'
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? 'white' : 'black'} 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <h4 className='text-[10px] font-black uppercase text-rose-500 mb-12 tracking-[0.3em] relative z-10'>
                      Studio Texture
                    </h4>
                    <div className='flex flex-col items-center gap-12 relative z-10'>
                      <div className='w-32 h-32 rounded-[2.5rem] bg-zinc-50 dark:bg-black/40 flex items-center justify-center shadow-inner group-hover:rotate-45 transition-transform duration-1000'>
                        <RotateCcw className='text-zinc-300' size={64} />
                      </div>
                      <p className='text-lg text-zinc-500 font-medium italic text-center max-w-[280px]'>
                        Subtle Dot Grids provide architectural precision.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`p-16 border ${isDarkMode ? 'bg-[#141A24] border-[#232D3D]' : 'bg-white border-zinc-100 shadow-xl'} ${tokens.radius}`}
                  >
                    <h4 className='text-[10px] font-black uppercase text-amber-500 mb-16 tracking-[0.3em]'>
                      The Squiggle
                    </h4>
                    <div className='space-y-24 py-4 flex flex-col items-center'>
                      <Squiggle className='w-full text-amber-500 h-10 hover:scale-x-110 transition-transform' />
                      <div className='relative w-full h-20 flex items-center justify-center'>
                        <Squiggle className='absolute inset-0 w-full text-rose-500/20 h-full rotate-2' />
                        <h4 className='font-serif text-4xl dark:text-white relative z-10 italic'>
                          Botanical Cut.
                        </h4>
                      </div>
                      <p className='text-xs text-zinc-400 text-center uppercase font-black tracking-widest mt-12'>
                        Universal Branding Accents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <footer
            className={`mt-60 py-32 border-t flex flex-col md:flex-row justify-between items-start gap-20 ${
              isDarkMode ? 'border-[#232D3D]' : 'border-zinc-200'
            }`}
          >
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 bg-[#8AC926] rounded-3xl rotate-12 flex items-center justify-center text-white shadow-xl'>
                  <Shapes size={32} />
                </div>
                <span className='font-serif text-5xl tracking-tighter uppercase dark:text-white'>
                  MiaSys
                </span>
              </div>
              <p className='text-sm font-black text-slate-500 uppercase tracking-[0.4em] ml-1'>
                Botanical Engineering • v1.5.2
              </p>
              <div className='flex gap-6'>
                <div className='w-10 h-10 rounded-2xl bg-amber-500 shadow-lg shadow-amber-500/20' />
                <div className='w-10 h-10 rounded-2xl bg-rose-500 shadow-lg shadow-rose-500/20' />
                <div className='w-10 h-10 rounded-2xl bg-lime-500 shadow-lg shadow-lime-500/20' />
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-24'>
              <div className='space-y-8'>
                <p className='text-xs font-black uppercase tracking-[0.2em] text-zinc-400'>
                  Environment
                </p>
                <div className='space-y-4'>
                  <a
                    href='#'
                    className='block text-base font-bold hover:text-rose-500 transition-colors'
                  >
                    Lab Discovery
                  </a>
                  <a
                    href='#'
                    className='block text-base font-bold hover:text-rose-500 transition-colors'
                  >
                    Pattern Flow
                  </a>
                </div>
              </div>
              <div className='space-y-8'>
                <p className='text-xs font-black uppercase tracking-[0.2em] text-zinc-400'>
                  Technical
                </p>
                <div className='space-y-4'>
                  <a
                    href='#'
                    className='block text-base font-bold hover:text-rose-500 transition-colors'
                  >
                    Github Set
                  </a>
                  <a
                    href='#'
                    className='block text-base font-bold hover:text-rose-500 transition-colors'
                  >
                    Figma Spec
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// --- ICON DATA OBJECT (Used for discovery tab) ---
const iconLibrary = {
  botanical: [
    { name: 'Leaf', icon: Leaf },
    { name: 'Wind', icon: Wind },
    { name: 'Sparkles', icon: Sparkles },
    { name: 'Zap', icon: Zap },
    { name: 'Shapes', icon: Shapes },
    { name: 'Brush', icon: Brush },
    { name: 'Cloud', icon: Cloud },
    { name: 'Sun', icon: Sun },
    { name: 'Moon', icon: Moon },
    { name: 'Sprout', icon: Sprout },
    { name: 'Trees', icon: Trees },
    { name: 'TreePine', icon: TreePine },
    { name: 'Droplets', icon: Droplets },
    { name: 'Flame', icon: Flame },
    { name: 'Mountain', icon: Mountain },
    { name: 'Waves', icon: Waves },
    { name: 'Bird', icon: Bird },
    { name: 'Bug', icon: Bug },
    { name: 'Ghost', icon: Ghost },
    { name: 'Camera', icon: Camera },
  ],
  action: [
    { name: 'MoveRight', icon: MoveRight },
    { name: 'Maximize2', icon: Maximize2 },
    { name: 'MousePointer2', icon: MousePointer2 },
    { name: 'Plus', icon: Plus },
    { name: 'Trash', icon: Trash },
    { name: 'Trash2', icon: Trash2 },
    { name: 'Download', icon: Download },
    { name: 'Share', icon: Share },
    { name: 'RotateCcw', icon: RotateCcw },
    { name: 'ChevronRight', icon: ChevronRight },
    { name: 'ChevronLeft', icon: ChevronLeft },
    { name: 'ChevronDown', icon: ChevronDown },
    { name: 'ExternalLink', icon: ExternalLink },
    { name: 'Eye', icon: Eye },
    { name: 'EyeOff', icon: EyeOff },
    { name: 'Filter', icon: Filter },
    { name: 'Play', icon: Play },
    { name: 'Pause', icon: Pause },
    { name: 'RefreshCw', icon: RefreshCw },
    { name: 'Send', icon: Send },
  ],
  communication: [
    { name: 'Mail', icon: Mail },
    { name: 'Phone', icon: Phone },
    { name: 'MapPin', icon: MapPin },
    { name: 'MessageSquare', icon: MessageSquare },
    { name: 'MessageCircle', icon: MessageCircle },
    { name: 'Bell', icon: Bell },
    { name: 'Flag', icon: Flag },
    { name: 'User', icon: User },
    { name: 'Users', icon: Users },
    { name: 'Heart', icon: Heart },
    { name: 'Star', icon: Star },
    { name: 'Globe', icon: Globe },
    { name: 'AtSign', icon: AtSign },
    { name: 'Link', icon: Link },
    { name: 'AtSign', icon: AtSign },
    { name: 'Link', icon: Link },
    { name: 'Gift', icon: Gift },
    { name: 'Smile', icon: Smile },
    { name: 'Languages', icon: Languages },
    { name: 'Hash', icon: Hash },
    { name: 'Megaphone', icon: Megaphone },
    { name: 'Radio', icon: Radio },
  ],
  system: [
    { name: 'Settings', icon: Settings },
    { name: 'Search', icon: Search },
    { name: 'Info', icon: Info },
    { name: 'AlertCircle', icon: AlertCircle },
    { name: 'CheckCircle2', icon: CheckCircle2 },
    { name: 'Lock', icon: Lock },
    { name: 'Unlock', icon: Unlock },
    { name: 'Fingerprint', icon: Fingerprint },
    { name: 'Home', icon: Home },
    { name: 'Activity', icon: Activity },
    { name: 'Clock', icon: Clock },
    { name: 'Calendar', icon: Calendar },
    { name: 'Key', icon: Key },
    { name: 'Shield', icon: Shield },
    { name: 'ShieldCheck', icon: ShieldCheck },
    { name: 'Terminal', icon: Terminal },
    { name: 'Power', icon: Power },
    { name: 'Bluetooth', icon: Bluetooth },
    { name: 'Wifi', icon: Wifi },
    { name: 'Map', icon: Map },
  ],
  data: [
    { name: 'SquareStack', icon: SquareStack },
    { name: 'Layers', icon: Layers },
    { name: 'Columns', icon: Columns },
    { name: 'Layout', icon: Layout },
    { name: 'Database', icon: Database },
    { name: 'Monitor', icon: Monitor },
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Image', icon: Image },
    { name: 'FileText', icon: FileText },
    { name: 'Battery', icon: Battery },
    { name: 'HardDrive', icon: HardDrive },
    { name: 'Cpu', icon: Cpu },
    { name: 'BarChart3', icon: BarChart3 },
    { name: 'PieChart', icon: PieChart },
    { name: 'Table', icon: Table },
    { name: 'FileJson', icon: FileJson },
    { name: 'Folder', icon: Folder },
    { name: 'Archive', icon: Archive },
    { name: 'Grid', icon: Grid },
    { name: 'List', icon: List },
  ],
};
